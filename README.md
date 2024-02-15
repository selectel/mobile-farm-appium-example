# Automated Testing with Appium and Selectel Mobile Farm
This repository serves as an illustrative example of how to effectively utilize automated tests with Appium alongside Selectel Mobile Farm for mobile device testing.

# Pre-requirements
Before getting started, ensure that the following prerequisites are met:

* Both the Android Software Development Kit (SDK) and Java Development Kit (JDK) need to be installed on your local machine.
* Set up and run an Appium server with the UiAutomator2 plugin installed.
* Have access to a physical device connected via ADB (Android Debug Bridge). If utilizing a remote device from Selectel Mobile Farm, ensure proper setup by acquiring a device and configuring the ADB key in the settings.

# Preparing
1. Customize the `.env` file according to your specific requirements.
2. Install the necessary dependencies using npm
```shell
 npm install
```

# Testing
Execute the automated tests using the following command:
```shell
npm run test
```
