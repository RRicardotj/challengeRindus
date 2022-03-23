export default class Service {
  constructor(endpoint = '', Http) {
    this.endpoint = endpoint;
    this.Http = Http;
  }

  post(route, data) {
    return this.Http.post(this.generateRoute(route), data);
  }

  get(route, params) {
    return this.Http.get(this.generateRoute(route), params);
  }

  put(route, data) {
    return this.Http.put(this.generateRoute(route), data);
  }

  delete(route, params) {
    return this.Http.delete(this.generateRoute(route), params);
  }

  /** @private */
  generateRoute(route = '') {
    return `${this.endpoint}${route}`;
  }

  setHttp(Http) {
    this.Http = Http;
  }
}
