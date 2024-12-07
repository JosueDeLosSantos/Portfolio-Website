import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanity/client";

export default function imageLoader(source, width, height, language = false) {
  const { projectId, dataset } = sanityClient.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : `https://placehold.co/${width}x${height}/png`;
  const imageUrl =
    source?.image && language === false
      ? urlFor(source.image)?.width(width).height(height).url()
      : `https://placehold.co/${width}x${height}/png`;
  const spanishImageUrl =
    source?.spanishImage && language === true
      ? urlFor(source.spanishImage)?.url()
      : `https://placehold.co/${width}x${height}/png`;

  return language === true ? spanishImageUrl : imageUrl;
}
