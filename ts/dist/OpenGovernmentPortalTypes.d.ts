export interface Dataset {
    description?: string;
    download_url?: string;
    formats?: any[];
    id?: string;
    jurisdiction?: string;
    keywords?: any[];
    publisher?: string;
    record_modified?: string;
    record_released?: string;
    resources?: any[];
    title?: string;
}
export interface DatasetLoadMatch {
    id: string;
}
export interface DatasetListMatch {
    format?: string;
    keyword?: string;
    limit?: number;
    organization?: string;
    page?: number;
    q?: string;
    sort?: string;
}
