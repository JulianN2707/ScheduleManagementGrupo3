// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    //URLs Bases
    urlRsc: 'http://localhost:8081/api/resource',
    urlCrs: 'http://localhost:8081/api/course',
    urlEnv: 'http://localhost:8081/api/environment',
    urlAuth: 'http://localhost:8081/api/auth',
    urlAcadOffer: 'http://localhost:8081/api/academicOffer',
    urlReserve : 'http://localhost:8081/api/environment/findEnviromentAvailability',
    urlReserveInSchedule:'http://localhost:8081/api/event/EventToSchedule'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
