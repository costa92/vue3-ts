import request from "@/utils/request";
import {AboutListResultModel} from "@/api/about/model.ts";

export function getAbout(params:any) {
    return  request.get<AboutListResultModel>("/api/abouts",params);
}