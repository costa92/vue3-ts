import {BasicFetchResult} from "@/api";

export interface ArticleData {
    id: number,
    title: string,
    cover: string,
    abstract: string,
    create_time: number,
    viewing: number,
    caterge
}

/**
 * @description: Request list return value
 */
export type ArticleListResultModel = BasicFetchResult<ArticleData>;