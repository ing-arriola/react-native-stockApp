import Auth0 from 'react-native-auth0';
const clientId = 'lN6MjqWRxnKwJ4WqnkDIltUp7EXToYSz';
const domain = 'dev-2w6gemwt.us.auth0.com';

export const auth0 = new Auth0({clientId: clientId, domain: domain});

export const DEFAULT_CONNECTION = 'Username-Password-Authentication';
export const AUDIENCE = 'https://dev-2w6gemwt.us.auth0.com/api/v2/';
