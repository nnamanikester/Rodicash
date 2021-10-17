import {defaults} from 'jest-config';
import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  displayName: {
    name: 'COMMON',
    color: 'blue',
  },
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  extraGlobals: [],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native)/'],
};

export default config;
