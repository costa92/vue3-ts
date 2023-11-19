import {BasicFetchResult} from "@/api";
import {Banner} from "@/api/banners/model.ts";

export interface Tag {
    id: number,
    name: string,
}

export type TagsResultModel = BasicFetchResult<Tag>;