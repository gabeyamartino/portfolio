module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|scss|png)$": "identity-obj-proxy",
    "\\.(png|svg|pdf|jpg|jpeg)$": "./fileMock.js",
  },
};
