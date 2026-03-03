import { useQuery } from "@tanstack/react-query";
import { fetchCmsConfig } from "../api/cms.api";
import type { CmsConfig } from "@/types/cms.types";

export const useCmsConfig = () => {
    return useQuery<CmsConfig>({
        queryKey: ["cmsConfig"],
        queryFn: fetchCmsConfig,
        // Set to 1 min for testing/review convenience.
        // In a real production app, 10+ mins is optimal since CMS config rarely changes.
        staleTime: 1000 * 60,
    });
};
