import {defaults} from 'jest-config';
import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  verbose: true,
  displayName: {
    name: 'RODICASH',
    color: 'green',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  extraGlobals: [],
  notify: true,
  notifyMode: 'success-change',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transform: {},
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native' +
      '|@react-native-community' +
      '|@react-navigation' +
      '|rn-swipe-button' +
      ')/',
  ],
};

export default config;
