import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ionicpwaelements',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    { type: 'www' },
  ],
  buildEs5: "prod",
  sourceMap: false,
  validateTypes: false,
  extras: {
    enableImportInjection: true
  }
};
