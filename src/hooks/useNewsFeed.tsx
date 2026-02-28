import useNewsFilters from "./useNewsFilters";
import { useCmsConfig } from "./useCmsConfig";
import { useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/api/news.api";
import type { NewsApiResponse } from "@/types/news.types";
import { formatSourcesForApi } from "@/utils/cms.utils";
import { transformAndSortArticles } from "@/utils/news.utils";

export const useNewsFeed = () => {
    const filters = useNewsFilters();
    const { data: cmsConfig, isLoading: isCmsLoading } = useCmsConfig();

    const sourcesForApi = useMemo(() => {
        if (!cmsConfig) return "";

        return formatSourcesForApi(
            filters.selectedSource,
            cmsConfig.allowedSources
        );
    }, [cmsConfig, filters.selectedSource]);

    const selectFn = useCallback(
        (rawNewsData: NewsApiResponse) =>
            transformAndSortArticles(
                rawNewsData,
                cmsConfig?.topics,
                filters.sortOrder
            ),
        [cmsConfig?.topics, filters.sortOrder]
    );

    const {
        data,
        isLoading: isNewsLoading,
        error,
    } = useQuery({
        queryKey: ["news", filters.searchQuery, sourcesForApi],
        queryFn: () =>
            fetchNews({
                q: filters.searchQuery || "general",
                sources: sourcesForApi,
                sortBy: "publishedAt"
            }),
        enabled: !!sourcesForApi,
        select: selectFn,
    });

    return {
        articles: data ?? [],
        cmsConfig,
        isLoading: isCmsLoading || isNewsLoading,
        error,
        ...filters
    };
};
