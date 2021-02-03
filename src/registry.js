class Registry {
  constructor() {
    if (!Registry.instance) {
      this._data = {};
      Registry.instance = this;
    }

    return Registry.instance;
  }

  set(registry, item) {
    this._data[registry] = item;
  }

  get(registry) {
    return this._data[registry];
  }

  get settings() {
    return this._data.settings;
  }

  set settings(settings) {
    this._data.settings = settings;
  }
}

const instance = new Registry();
Object.freeze(instance);

export default instance;