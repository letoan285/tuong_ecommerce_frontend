import { IRemoteConfig } from '../shared/interface/common';

let configs: IRemoteConfig | undefined;

export const initConfig = (): Promise<IRemoteConfig> => {
  return new Promise((resolve, reject) => {
    /**
     * Some data from remote config API place here
     */
    const remoteConfig = {};
    /**
     * Some data from remote config API place here
     */
    const config: IRemoteConfig = {
      endpoint: 'http://165.22.103.200:8083',
      domain: 'http://165.22.103.200:8083',
      accessToken: '7645dbab3206527a2d8120e1736fi4u44c',
      googleApiKey: 'AIzaSyDe2Kk6i-VPLHmGq-0_RH7JYk1QlaxSYMsI',
      adminPassword: '',
      adminUser: '',
      sitecoreApiKey: '7A3E0468-E733-4F81-AABE-2BC0E797E5E0',
      ...remoteConfig,
    };
    configs = config;
    resolve(config);
  });
};

export const getBaseConfig = (): IRemoteConfig | undefined => {
  return configs;
};
