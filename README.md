# Partner Insight App

## Overview

The Partner Insight application is developed using React Native and showcases a detailed user profile interface with interactive elements such as buttons and modals. The application is designed to closely replicate a given Figma design, and it incorporates features such as navigating between screens, displaying modals, and tooltips.

> **Note**: [Figma Design Access](https://www.figma.com/design/mjwRF2J0x4pqgsnozhpap0/Take-Home-Assessment-Design?node-id=0-1&t=SKfgHzrdpL77qCOf-1)

## Features

- **Navigation** between main and partner insight screens using React Navigation.
- **CustomModal** that handle user confirmation actions.
- **CustomTooltip** for displaying additional information.
- **Reusable Components** for modals and tooltips.
- **Responsive Design** ensuring the app looks great on both iOS and Android devices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- React Native CLI installed, if you choose to run the project with React Native.
- Android Studio or Xcode setup for emulator/simulator support.

## Installation

Decompress zip file and install node_modules:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
cd ios && pod install && cd .. && npm run ios

# OR using Yarn
cd ios && pod install && cd .. && yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
