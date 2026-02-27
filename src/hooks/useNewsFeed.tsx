import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCmsConfig } from "../api/cms.api";
import { fetchNews } from "../api/news.api";

export const useNewsFeed = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSource, setSelectedSource] = useState("all");
    const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

    const { data: cmsConfig, isLoading: isCmsLoading } = useQuery({
        queryKey: ["cmsConfig"],
        queryFn: fetchCmsConfig,
    });

    const sourcesForApi = useMemo(() => {
        if (!cmsConfig) return "";
        if (selectedSource !== "all") return selectedSource;

        return cmsConfig.allowedSources.map((s) => s.id).join(",");
    }, [cmsConfig, selectedSource]);

    const {
        data: newsData,
        isLoading: isNewsLoading,
        error,
    } = useQuery({
        queryKey: ["news", searchQuery, sourcesForApi],
        queryFn: () =>
            fetchNews({
                q: searchQuery || "general",
                sources: sourcesForApi,
            }),
        enabled: !!sourcesForApi,
    });

    const processedArticles = useMemo(() => {
        if (!newsData?.articles) return [];

        const articles = [...newsData.articles];

        //  API doesn`t support sort order,
        //  and has limits for data in Free Plan
        //  so , just sort in client
        if (sortOrder === "asc") {
            articles.reverse();
        }

        // topic logic

        return articles;
    }, [newsData, sortOrder]);

    return {
        articles: processedArticles,
        cmsConfig,

        isLoading: isCmsLoading || isNewsLoading,
        error,

        searchQuery,
        selectedSource,
        sortOrder,

        setSearchQuery,
        setSelectedSource,
        setSortOrder,
    };
};
