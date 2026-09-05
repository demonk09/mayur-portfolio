# Mayur Kamble — React Native App

Native Android + iOS portfolio built with React Native and Expo SDK 57.

## Run locally

```bash
cd mobile
npm install
npx expo start
```

## Create the Expo/EAS project

You need an Expo account and an `EXPO_TOKEN` for non-interactive builds. From `mobile/`:

```bash
npm install --global eas-cli@latest
eas login
eas init
```

EAS writes the project ID into the generated app configuration when the project is linked.

## Android installable APK

The `preview` profile is configured for an installable APK:

```bash
eas build --platform android --profile preview
```

When the build finishes, EAS provides the APK install link.

## Google Play production build

```bash
eas build --platform android --profile production
```

This creates a production Android app bundle suitable for Google Play. EAS can manage Android signing credentials during setup.

## iOS production build

```bash
eas build --platform ios --profile production
```

Apple signing credentials are required for an App Store build.

## GitHub Actions — automatic Android APK

The repository includes `.github/workflows/mobile-android.yml`. Add an Expo access token to the GitHub repository as:

`Settings → Secrets and variables → Actions → New repository secret → EXPO_TOKEN`

After that, every push that changes `mobile/**` can build the preview APK, and you can also start it manually from the Actions tab.

The workflow runs `eas init --force --non-interactive` and then `eas build --platform android --profile preview --non-interactive --wait`.

## Important store-release requirements

Before publishing to Google Play or the Apple App Store, configure the store developer accounts, signing credentials, app icon/splash artwork, store listing metadata, privacy details, screenshots, and required declarations. Store submission can then be automated with EAS Submit.
