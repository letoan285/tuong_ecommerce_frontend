import Product from './product';
import Category from './category';
export const getApiController = (storeView='US') => (storeView ? `` : ''); // if there is storeview, give it prefix
export const NestjsResource = {
    Product,
    Category
}
