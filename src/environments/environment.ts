// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    ssoRedirectUri: 'http://localhost:9999/',
    clientId: 'bc85d02fd2774b2e944a69492e0b5946',
    endpoints: {
        authenticateWithCode: 'http://localhost:9999/api/sso/code_auth/{code}',
        getAffiliation: 'http://localhost:9999/api/sso/affiliation/{session}',
        ccpSearch: 'https://esi.tech.ccp.is/latest/search/?categories=solarsystem&search={query}&strict=false',
        contracts: 'http://localhost:9999/api/contracts'
    }
};
