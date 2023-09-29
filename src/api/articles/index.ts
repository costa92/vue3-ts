import request from "@/utils/request";
import { ArticleListResultModel} from "@/api/articles/model.ts";

export function getArticles(params:any) {
   return  request.get<ArticleListResultModel>("/api/articles",params);
}