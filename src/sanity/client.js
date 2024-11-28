import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-27", // use current date (YYYY-MM-DD) to target the latest API version
});

export default sanityClient;
