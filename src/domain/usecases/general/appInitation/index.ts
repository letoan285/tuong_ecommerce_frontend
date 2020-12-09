import { initConfig } from '../../../../config';
import { IUseCase } from '../../../../shared/interface/common/usecase';

export default class AppInitUseCase implements IUseCase {

    execute = (): Promise<[]> => {
        return new Promise((resolve, reject) => {
            initConfig().then(configs => {
                resolve([]);
            }).catch(reject);
        });
    }
}