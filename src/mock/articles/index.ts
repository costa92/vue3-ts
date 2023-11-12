import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/articles',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'success',
                total: 10,
                items: [
                    {
                        id: 1,
                        title: "test",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        abstract: "本篇为ELK Stack生产实践系列专题第十八篇，本篇主要内容是介绍使用Fluent Bit采集pod日志方案，" +
                            "并总结Fluent Bit常用模块以及使用配置示例。并以自定义日志采集为例，演示如何通过sidecar方式采集、过滤、输出到ES中。",
                    },
                    {
                        id: 3,
                        title: "test",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        abstract: "本篇为ELK Stack生产实践系列专题第十八篇，本篇主要内容是介绍使用Fluent Bit采集pod日志方案，" +
                            "并总结Fluent Bit常用模块以及使用配置示例。并以自定义日志采集为例，演示如何通过sidecar方式采集、过滤、输出到ES中。",
                    },
                    {
                        id: 2,
                        title: "test1",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        abstract: "12122122",
                    },
                    {
                        id:4,
                        title: "test1",
                        cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                        abstract: "12122122",
                    }
                ]
            }
        }
    },
    // more...
] as MockMethod[]
