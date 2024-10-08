/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  "collectCoverage": true,
  "coverageReporters": ["text","html"],
  "coverageDirectory": "./test/coverage/"
  
};