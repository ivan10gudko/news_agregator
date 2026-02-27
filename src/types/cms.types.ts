
export interface CmsAllowedSource {
    id: string;
    name: string;
}

export interface CmsTopic {
    id: string;
    name: string;
    keywords: string[];
}

export interface CmsConfig {
    allowedSources: CmsAllowedSource[];
    topics: CmsTopic[];
}