import Axios from 'axios';
import { IResource } from '../../../../../shared/interface/common/resource';
import Type from '../../type';

const getAll = (): IResource => {
    return {
        Type: Type.Public,
        Path: '/api/products'
    }
}

const getOne = (id: number): IResource => ({
    Type: Type.Public,
    Path: `/api/products/${id}`

})


export default {
    getAll,
    getOne
}