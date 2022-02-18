// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movieApiUrl: 'https://api.themoviedb.org/3',
  movieApiKey: '5828e432298a837499ec6162b945c4db',
  backendApiUrl: 'http://localhost:3977/api',
  auth: {
    domain:"iagosayar.us.auth0.com",
    clientId:"wccot3UbTulFbuQ81qytXaG91SYmhlNE",
    redirectUri: window.location.origin,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
