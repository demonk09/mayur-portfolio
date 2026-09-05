# Mayur Kamble — React Native App

Native Android + iOS portfolio built with React Native and Expo.

## Run locally

```bash
cd mobile
npm install
npx expo start
```

## Android installable preview

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

The preview profile produces an APK suitable for direct Android installation. EAS Build can also produce store-ready Android/iOS binaries. See Expo EAS documentation for credentials and submission requirements.

## Store builds

```bash
eas build --platform android --profile production
eas build --platform ios --profile production
```

Android uses an AAB for Google Play distribution; iOS produces an App Store-ready build. Before release, replace the Expo project ID placeholder in `app.json` after running `eas init` or `eas build:configure`.
