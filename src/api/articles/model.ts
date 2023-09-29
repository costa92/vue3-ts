import {BasicFetchResult} from "@/api";

export interface ArticleData {
    id: number,
    title: string,
    cover: string,
    abstract: string,
}

/**
 * @description: Request list return value
 */
export type ArticleListResultModel = BasicFetchResult<ArticleData>;