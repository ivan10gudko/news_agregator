export interface CmsSource {
    id: string;
    name: string;
}

export interface CmsTopic {
    id: string;
    name: string;
    keywords: string[];
}

export interface CmsConfig {
    allowedSources: CmsSource[];
    topics: CmsTopic[];
}
