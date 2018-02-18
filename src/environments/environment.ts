// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyAAjMUXLQsecELSm5JAU-fktvwZfxm19ZM",
    authDomain: "humancancerousinteraction.firebaseapp.com",
    databaseURL: "https://humancancerousinteraction.firebaseio.com",
    projectId: "humancancerousinteraction",
    storageBucket: "humancancerousinteraction.appspot.com",
    messagingSenderId: "59134066780"
  }
};
