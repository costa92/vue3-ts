import { i18n } from "@/i18n";

// 路由
export const i18nRouter = (message: string, prefix: string = "messages.router.") => i18n.global.t(`${prefix}${message}`);