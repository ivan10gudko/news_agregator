import type { CmsTopic } from "@/types/cms.types";
import type { Article, ArticleTopic, NewsApiResponse } from "@/types/news.types";


export const determineArticleTopics = (
    title: string,
    cmsTopics: CmsTopic[] | undefined
): ArticleTopic[] => {
    if (!title || !cmsTopics || cmsTopics.length === 0) return [];

    const res =  cmsTopics.reduce<ArticleTopic[]>((acc, topic) => {
        const hasMatch = topic.keywords.some((keyword) => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            return regex.test(title);
        });

        if (hasMatch) {
            acc.push({ id: topic.id, name: topic.name });
        }

        return acc;
    }, []);

    return res;
};

export const transformAndSortArticles = (
    rawNewsData: NewsApiResponse,
    topics: CmsTopic[] | undefined,
    sortOrder: "asc" | "desc"
): Article[] => {
    if (!rawNewsData?.articles) return [];

    const transformed = rawNewsData.articles.map((article) => ({
        ...article,
        topics: determineArticleTopics(article.title, topics),
    }));

    return sortOrder === "asc" ? transformed.reverse() : transformed;
};

export const createSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};