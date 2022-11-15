module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svgMock.js"
  }
};
