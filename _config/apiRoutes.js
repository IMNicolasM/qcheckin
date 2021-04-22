const moduleName = 'icheckin';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  shifts: `${urlBase}/shifts`,
}
