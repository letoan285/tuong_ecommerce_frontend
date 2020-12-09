import { getBaseConfig } from '../../config';

export const getConfig = () => {
  const mBaseConfig = getBaseConfig();
  if (mBaseConfig) {
    return mBaseConfig;
  }
};
