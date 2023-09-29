import {BasicFetchResult} from "@/api";

export interface Banner {
    content: string,
    id: number,
    link: string,
}

/**
 * @description: Request list return value
 */
export type BannerResultModel = BasicFetchResult<Banner>;