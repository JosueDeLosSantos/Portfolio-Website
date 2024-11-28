import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanity/client";

export default function imageLoader(source, width, height) {
  const { projectId, dataset } = sanityClient.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : `https://placehold.co/${width}x${height}/png`;
  const imageUrl = source?.image
    ? urlFor(source.image)?.width(width).height(height).url()
    : `https://placehold.co/${width}x${height}/png`;

  return imageUrl;
}
