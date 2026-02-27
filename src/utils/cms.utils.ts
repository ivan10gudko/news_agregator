import type { CmsAllowedSource } from "@/types/cms.types";

export const formatSourcesForApi = (
    selectedSource: string,
    allowedSources: CmsAllowedSource[] = [],
): string => {
    if (selectedSource !== "all") {
        return selectedSource;
    }

    return allowedSources.map((s) => s.id).join(",");
};