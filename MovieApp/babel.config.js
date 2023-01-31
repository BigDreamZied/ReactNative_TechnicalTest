module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv",{
    "envName": "NODE_ENV",
    "moduleName": "react-native-dotenv",
    "path": `./.env`,
    "blocklist": null,
    "allowlist": {
      API_URL: String
    },
   
    "safe": true,
    "allowUndefined": true,
    "verbose": false
  }]
  ]
};
