// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBarDUdkzoiyndbjVELWeWHQH-pKY-7J9U",
    authDomain: "eecs330resolution.firebaseapp.com",
    databaseURL: "https://eecs330resolution.firebaseio.com",
    projectId: "eecs330resolution",
    storageBucket: "eecs330resolution.appspot.com",
    messagingSenderId: "877736388957"
  }
};
