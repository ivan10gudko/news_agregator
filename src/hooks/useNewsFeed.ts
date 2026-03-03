import useNewsFilters from "./useNewsFilters";
import { useCmsConfig } from "./useCmsConfig";
import { useCallback, useMemo } from "react";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
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
        (infiniteData: InfiniteData<NewsApiResponse>) => {
            const allRawArticles = infiniteData.pages.flatMap(
                (page) => page.articles || []
            );

            return transformAndSortArticles(
                allRawArticles,
                cmsConfig?.topics,
                filters.sortOrder
            );
        },
        [cmsConfig?.topics, filters.sortOrder]
    );

    const {
        data,
        isLoading: isNewsLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["news", filters.searchQuery, sourcesForApi],

        queryFn: ({ pageParam = 1 }) =>
            fetchNews({
                q: filters.searchQuery || "general",
                sources: sourcesForApi,
                sortBy: "publishedAt",
                page: pageParam,
                pageSize: 30,
            }),

        initialPageParam: 1,

        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage.articles || lastPage.articles.length < 20)
                return undefined;
            return allPages.length + 1;
        },

        enabled: !!sourcesForApi,

        select: selectFn,
    });

    return {
        articles: data ?? [],
        cmsConfig,

        isLoading: isCmsLoading || isNewsLoading,
        error,

        filters,

        pagination: {
            fetchNextPage,
            hasNextPage,
            isFetchingNextPage,
        },
    };
};
