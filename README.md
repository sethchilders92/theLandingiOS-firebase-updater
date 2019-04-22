# theLandingiOS-firebase-updater
An easy way to update firebase through the console

## Setup
First thing's first, you need to clone the repo:
```
git clone https://github.com/sethchilders92/theLandingiOS-firebase-updater.git
```

Then you need to install everything in the `package.json`:
```
npm install
```

Now you need to generate an authentication token, and we're just going to put it in a file:

1. Go to [Google Firebase](https://console.firebase.google.com/project/thelanding-211901/settings/serviceaccounts/adminsdk)
2. Make sure `Node.js` is selected under the `Admin SDK configuration snippet` section
3. Click on `Generate new private key`
4. Rename the file that downloads to `auth.json`
5. Put that file into `theLandingiOS-firebase-updater` directory on your computer.

This file is in the `.gitignore` file so it shouldn't be pushed up to GitHub.

## A Few Things to Know
1. `index.js` reads from the `times.json` file that you need to generate and fill out. Follow the steps in `generateTemplateTimes.js` to create this file
2. Once you have a `times.json` file filled out, follow the steps in `index.js` to put the times in Firebase

## To Run
Both `generateTemplateTimes.js` and `index.js` have instructions within their files on how to run their code
