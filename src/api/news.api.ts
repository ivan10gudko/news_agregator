import type { NewsApiResponse } from "@/types/news.types";

const BASE_URL = import.meta.env.VITE_API_URL || "https://newsapi.org/v2";;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const buildNewsUrl = (
    endpoint: string,
    params?: Record<string, string | number | boolean | undefined | null>
): string => {
    const url = new URL(`${BASE_URL}${endpoint}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                url.searchParams.append(key, String(value));
            }
        });
    }


    url.searchParams.append("apiKey", API_KEY);

    return url.toString();
};

export interface FetchNewsParams {
    q?: string;
    sources?: string;
    sortBy?: "publishedAt" | "relevancy" | "popularity";
    page?: number;
    pageSize?: number;
}

export const fetchNews = async (params: FetchNewsParams = {}): Promise<NewsApiResponse> => {
    const safeParams = {
        ...params,
        q: params.q || (params.sources ? undefined : "news"),
    };

    const url = buildNewsUrl("/everything", safeParams);

    const response = await fetch(url);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch news from API");
    }

    return response.json();
};