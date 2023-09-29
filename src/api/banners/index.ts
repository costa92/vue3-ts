import request from "@/utils/request";
import {BannerResultModel} from "@/api/banners/model.ts";

export function getBanners(params:any) {
    return  request.get<BannerResultModel>("/api/banners",params);
}