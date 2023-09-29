import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/banners',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'success',
                total: 4,
                items: [
                    {
                        content:"https://oss.cuiliangblog.cn/carousel/2023_01_12_20_20_01_690-1673526001798.jpg",
                        id:1,
                        link:""
                    },
                    {
                        content:"https://oss.cuiliangblog.cn/carousel/2023_03_23_16_55_04_534-1679561704816.jpg",
                        id:2,
                        link:""
                    },
                ]
            }
        }
    },
] as MockMethod[]
