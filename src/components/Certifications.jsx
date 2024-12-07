import { motion } from "framer-motion";
import imageLoader from "../utils/imageLoader.js";
import useSanityClient from "../hooks/useSanityClient.js";
import { DateTime } from "luxon";
import useTranslation from "../hooks/useTranslation.js";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbPdf, TbPng } from "react-icons/tb";
import PropTypes from "prop-types";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const CertificationCard = ({ certification, language }) => {
  const certificationImage = imageLoader(certification);
  const certificationSpanishImage = imageLoader(certification, 412, 330, true);
  // const date = moment(project.endDate).format("MMM YYYY");
  const rawDate = DateTime.fromISO(certification.endDate);
  const date = rawDate.toLocaleString({ month: "short", year: "numeric" });
  const spanishDate = rawDate
    .setLocale("es")
    .toLocaleString({ month: "short", year: "numeric" });
  // Translations
  const spanishDescription = useTranslation(certification.description);
  const spanishName = useTranslation(certification.name);
  console.log(certificationSpanishImage);

  return (
    <ScrollReveal>
      <div className="flex xl:flex-row flex-col max-xl:p-2 max-xl:max-w-[300px] xl:max-w-[1300px] bg-[rgba(3,105,161,0.5)] transition-all duration-300 hover:scale-105 box-border">
        {/* image */}
        <div className="w-full xl:w-5/12 h-full cursor-pointer">
          <a
            href={
              !language
                ? `${certification.certificationLink}`
                : `${certification.spanishCertificationLink}`
            }
            target="_blank"
          >
            <img
              src={!language ? certificationImage : certificationSpanishImage}
              alt={!language ? "Certification image" : "Imagen del certificado"}
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <div className="w-full xl:w-7/12 flex items-center">
          <div className="flex flex-col box-border h-full max-xl:pt-2 xl:p-5">
            {/* title and description */}
            <div className="flex flex-col justify-around h-full tracking-wide max-xl:gap-5">
              <div className="flex xl:flex-col flex-col-reverse gap-5">
                <div className="text-lg xl:text-xl font-semibold">
                  {!language && certification.name}
                  {language && spanishName === undefined && certification.name}
                  {language && spanishName}
                </div>

                {/* date */}
                <div className="flex gap-1 items-center font-['Inter'] text-xs bg-[#e2e8f033] text-[#e2e8f0e6] px-2 py-1 w-fit">
                  <LiaCertificateSolid className="size-5" />
                  <p className="">
                    {!language && date} {language && spanishDate}
                  </p>
                </div>
              </div>
              <div className="text-slate-200 text-sm xl:text-base">
                {!language && certification.description}
                {language &&
                  spanishDescription === undefined &&
                  certification.description}
                {language && spanishDescription}
              </div>
              {/* links */}
              <div className="flex flex-wrap gap-8 text-sm xl:text-base">
                {/* PDF DOWNLOAD */}
                <a
                  href={
                    !language
                      ? `${certification?.englishCertificateUrl}?dl=certificate.pdf`
                      : `${certification?.spanishCertificateUrl}?dl=certificado.pdf`
                  }
                  download={"certification.pdf"}
                  className="cursor-pointer"
                >
                  <button className="text-[#e2e8f0e6] hover:text-slate-200  font-['Inter'] flex gap-1 items-center hover:underline hover:underline-offset-2">
                    <span>
                      {!language && "Download"}
                      {language && "Descargar"}
                    </span>
                    <TbPdf className="size-6 xl:size-7" />
                  </button>
                </a>
                {/* PNG DOWNLOAD */}
                <a
                  href={
                    !language
                      ? `${certification.pngEnglishDownload}?dl=certificate.png`
                      : `${certification.pngSpanishDownload}?dl=certificate.png`
                  }
                  download={"certification.png"}
                  className="cursor-pointer"
                >
                  <button className=" text-[#e2e8f0e6] hover:text-slate-200 font-['Inter'] flex gap-1 items-center hover:underline hover:underline-offset-4">
                    <span>
                      {!language && "Download"}
                      {language && "Descargar"}
                    </span>
                    <TbPng className="size-6 xl:size-7" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

function Certifications({ language }) {
  const certificationsQuery = `*[_type == "certification"] | order(endDate desc) {..., "englishCertificateUrl": englishFile.asset->url, "spanishCertificateUrl": spanishFile.asset->url, "pngEnglishDownload": image.asset->url, "pngSpanishDownload": spanishImage.asset->url}`;
  const certifications = useSanityClient(certificationsQuery);
  const singleCertification = Array.isArray(certifications)
    ? null
    : certifications;

  console.log(certifications, language);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-14 sm:gap-20 px-4 py-32">
      <ScrollReveal>
        <h1 className="text-[9vw] font-light text-white sm:text-5xl">
          {!language && "Certifications"}
          {language && "Certificaciones"}
        </h1>
      </ScrollReveal>
      <ScrollReveal>
        <div className="max-w-[1000px] text-lg text-slate-200 font-['Inter']">
          <p>
            This list showcases all my certifications, which complement and
            enhance my software engineering experience. Each certification
            represents a commitment to continuous learning and professional
            growth, covering a range of skills, ensuring a well-rounded and
            up-to-date expertise in the field.
          </p>
        </div>
      </ScrollReveal>
      <div className="flex flex-col text-white  md:max-xl:grid md:max-xl:grid-cols-2 lg:max-xl:grid-cols-3 gap-16">
        {certifications?.length &&
          certifications.map((certification) => (
            <CertificationCard
              key={certification._id}
              certification={certification}
              language={language}
            />
          ))}
        {singleCertification && (
          <CertificationCard
            project={singleCertification}
            language={language}
          />
        )}
      </div>
    </div>
  );
}

CertificationCard.propTypes = {
  certification: PropTypes.object,
  language: PropTypes.bool,
};

ScrollReveal.propTypes = {
  children: PropTypes.node,
};

Certifications.propTypes = {
  language: PropTypes.bool,
};

export default Certifications;
