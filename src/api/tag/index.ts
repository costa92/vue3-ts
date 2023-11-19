import request from "@/utils/request";
import TagsResultModel from "@/api/tag/model.ts";

export function getTags(params:any) {
    return  request.get<TagsResultModel>("/api/tags",params);
}
