export default class Shuttle {
  constructor() {
    this.params = {};
    this.data = {};
  }
}

Shuttle.prototype = Object.create(Shuttle.prototype);
Shuttle.prototype.constructor = Shuttle;

Shuttle.liftRequest = (req) => {
  const s = new Shuttle();

  s.params = req.params;
  s.data = req.body;

  return Promise.resolve(s);
};

Shuttle.liftFunction = (fn, ...keys) => {
  return async (shuttle) => {
    const args = [];

    for (let i = 0; i < keys.length; i++) {
      const deepKey = keys[i];

      if (deepKey === null) {
        args.push(null);
      } else {
        let val = null;

        const splitKey = deepKey.split('.');

        for (let j = 0; j < splitKey.length; j++) {
          const key = splitKey[j];

          if (j === 0) {
            val = shuttle[key];
          } else {
            val = val[key];
          }
        }

        args.push(val);
      }
    }
    const newShuttle = shuttle;
    const result = await fn(...args);

    newShuttle.data = result;

    return Promise.resolve(newShuttle);
  };
};
