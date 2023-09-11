import { createI18n } from "vue-i18n";
import { settingsStoreType } from "@/types";
import LocalZhCn from "@/i18n/lang/zh-cn";
import LocalEn from "@/i18n/lang/en";
// 定义语言国际化内容
/**
 * 说明：
 * /src/i18n/lang 下的 ts 为框架的国际化内容
 * /src/i18n/pages 下的 ts 为各界面的国际化内容
 */
const messages = {
    ["zh-cn"]: {
        messages: LocalZhCn,
    },
    ["en"]: {
        messages: LocalEn,
    },
};
const getLocale = () => {
    console.log("localStorage.getItem('config')", localStorage.getItem("config"));
    const config = JSON.parse(localStorage.getItem("config") || "{}") as settingsStoreType["config"];
    return config?.language || "zh-cn";
};
// 导出语言国际化
export const i18n = createI18n({
    locale: getLocale(),
    fallbackLocale: "zh-cn",
    messages,
});