import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/tags',
        method: 'get',
        response: () => {
            // return  {
            //     code: 0,
            //     message: 'success',
            //     total: 0,
            //     items: [],
            // }
            return {
                code: 0,
                message: 'success',
                total: 2,
                items: [
                    {
                        id:1,
                        name:"golang"
                    },
                    {
                        id:2,
                        name:"数据"
                    },
                    {
                        id:3,
                        name:"网络"
                    },
                    {
                        id:4,
                        name:"文章"
                    },
                ]
            }
        }
    },
] as MockMethod[]
