import type { CmsConfig, CmsSource, CmsTopic } from "@/types/cms.types";
import { sanityClient } from "./sanity.client";

export const fetchCmsConfig = async (): Promise<CmsConfig> => {
    const sourcesQuery = `*[_type == "source"]{
        "id": sourceData.id,
        "name": sourceData.name
    }`;

    const topicsQuery = `*[_type == "topic"]{
        "id": _id,
        name,
        keywords
    }`;

    try {
        const [sources, topics] = await Promise.all([
            sanityClient.fetch<CmsSource[]>(sourcesQuery),
            sanityClient.fetch<CmsTopic[]>(topicsQuery),
        ]);

        return {
            allowedSources: sources ?? [],
            topics: topics ?? [],
        };
    } catch (error) {
        console.error("Failed to fetch CMS config:", error);
        return { allowedSources: [], topics: [] };
    }
};
