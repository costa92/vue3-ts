import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import articleMock from "./articles";
import bannerMock  from "./banners"

export function setupProdMockServer() {
    createProdMockServer([...bannerMock,articleMock])
}