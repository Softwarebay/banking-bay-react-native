module.exports = {
    name: "BankingBay",
    slug:"BankingBay",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon1.png",
    userInterfaceStyle: 'light',
    splash: {
        image: "./assets/splash1.png",
        resizeMode: 'cover',
        backgroundColor: '#161966'
    },
    updates: {
        fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
        '**/*'
    ],
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon1.png",
            backgroundColor:"#161966",
        },
        softwareKeyboardLayoutMode : 'pan'
    },
    web: {
        favicon: "./assets/favicon.png"
    },
    extra: {
      loadStorybook: process.env.LOAD_STORYBOOK
    }
}
