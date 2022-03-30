module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  snapshotSerializers: ['@emotion/jest/enzyme-serializer'],
};
