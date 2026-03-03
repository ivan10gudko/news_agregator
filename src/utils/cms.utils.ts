import type { CmsSource } from "@/types/cms.types";

export const formatSourcesForApi = (
    selectedSource: string,
    allowedSources: CmsSource[] = []
): string => {
    if (selectedSource !== "all") {
        return selectedSource;
    }

    return allowedSources.map((s) => s.id).join(",");
};
