/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  modulePaths: ["<rootDir>/src"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};