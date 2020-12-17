import Product from './product';
import Category from './category';
import User from './user';
export const getApiController = (storeView='US') => (storeView ? `` : ''); // if there is storeview, give it prefix
export const ExpressResource = {
    Product,
    Category,
    User
}
