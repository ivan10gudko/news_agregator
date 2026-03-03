// src/types/news.types.ts

import type { CmsTopic } from "./cms.types";

export interface NewsSource {
    id: string | null;
    name: string;
}

export type ArticleTopic = Omit<CmsTopic, "keywords">;
export interface Article {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
    topics: ArticleTopic[];
}

export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
