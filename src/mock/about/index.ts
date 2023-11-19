import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/abouts',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'success',
                items: [
                    {
                        content: "[img](https://oss.cuiliangblog.cn/carousel/2023_01_12_20_20_01_690-1673526001798.jpg) ![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)",
                        id:1,
                        title:"标题"
                    },
                    {
                        content:"![RUNOOB 图标](https://oss.cuiliangblog.cn/carousel/2023_03_23_16_55_04_534-1679561704816.jpg)",
                        id:2,
                        title:"标题22"
                    },
                ]
            }
        }
    },
] as MockMethod[]
