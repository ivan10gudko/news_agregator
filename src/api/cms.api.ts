import type { CmsConfig } from "@/types/cms.types";

const mockCmsData: CmsConfig = {
    allowedSources: [
        { id: "bbc-news", name: "BBC News" },
        { id: "cnn", name: "CNN" },
        { id: "techcrunch", name: "TechCrunch" },
        { id: "the-verge", name: "The Verge" },
    ],
    topics: [
        {
            id: "topic-1",
            name: "Technology",
            keywords: ["tech", "ai", "software", "apple", "google", "react", "startup"]
        },
        {
            id: "topic-2",
            name: "Business",
            keywords: ["market", "finance", "economy", "bank", "invest", "money"]
        },
        {
            id: "topic-3",
            name: "Science",
            keywords: ["space", "nasa", "research", "study", "scientist", "climate"]
        }
    ]
};

export const fetchCmsConfig = async (): Promise<CmsConfig> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCmsData);
        }, 800);
    });
};