import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
  '\\.css\\.ts$': '<rootDir>/__mocks__/styleMock.ts', 
  '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
  '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': '<rootDir>/__mocks__/fileMock.ts',
  '^@/(.*)$': '<rootDir>/src/$1',
  },

  
};

export default createJestConfig(config);