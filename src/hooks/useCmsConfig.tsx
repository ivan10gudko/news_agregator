import { useQuery } from "@tanstack/react-query";
import { fetchCmsConfig } from "../api/cms.api";
import type { CmsConfig } from "@/types/cms.types";

export const useCmsConfig = () => {
    return useQuery<CmsConfig>({
        queryKey: ["cmsConfig"],
        queryFn: fetchCmsConfig,
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
};
