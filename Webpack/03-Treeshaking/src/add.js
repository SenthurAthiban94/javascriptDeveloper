export const add = (a,b)=>a+b;
// Unused functions are ignored in production build by webpack and are called treeshaking, which does not occur on development environment.
export const sub = (a,b)=>a-b;
// sub function will be included into development environment build as treeshaking will not be done in dev environment.
// sub function will be ignored into the production environment build as treeshaking will be done in production.