import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2024-03-02",
});
