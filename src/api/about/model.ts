import {BasicFetchResult} from "@/api";
export interface About {
    content: string,
    id: number,
    time: number,
    title: string,
}


/**
 * @description: Request list return value
 */
export type AboutListResultModel = BasicFetchResult<About>;