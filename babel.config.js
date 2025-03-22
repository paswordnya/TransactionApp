module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@app": "./app",
          "@model": "./app/model",
          "@presentation": "./app/presentation",
          "@repository": "./app/repository",
          "@utils": "./app/utils",
          "@root": "./" 
        }, 
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    ]
  ]
};
