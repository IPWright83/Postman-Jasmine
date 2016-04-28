function describe(tests) {

  window.it = function(name) {

    function success() {

      // Add Postman result
      if (tests) {
        tests[name] = true;
      }

      // Log to console
      console.log('%c ' + name, 'color: #009587');
    };

    function fail(func, actual, inverted, expected) {

      var message = "expected ";
      message += actual;
      message += " to";
      message += inverted ? " not" : "";

      switch (func) {
        case 'toBe':
          message += " be " + expected;
          break;
        case 'toEqual':
          message += " equal " + expected;
          break;
        case 'toBeUndefined':
          message += " be undefined";
          break;
        case 'toBeNull':
          message += " be null";
          break;
        case 'toBeFasly':
          message += " be falsy";
          break;
        case 'toContain':
          message += " contain " + expected;
          break;
        case 'toBeLessThan':
          message += " be less than " + expected;
          break;
        case 'toBeGreaterThan':
          message += " be greater than " + expected;
          break;
        case 'toBeLessThanOrEqual':
          message += " be less than or equal to " + expected;
          break;
        case 'toBeGreaterThanOrEqual':
          message += " be greater than or equal to " + expected;
          break;
        default:
          message += " unknown func " + (expected) ? expected : "";
          break;
      }

      // Add Postman result
      if (tests) {
        tests[name + ": " + message] = false;
      }

      // Log to console
      console.log('%c ' + name + ": " + message, 'color: #fe5151');
    }

    function toBe(actual, expected, inverted) {
      var pass = false;

      if (inverted) pass = actual !== expected;
      else pass = actual === expected;

      if (pass) success();
      else fail("toBe", actual, inverted, expected);
    }

    function toEqual(actual, expected, inverted) {
      var pass = false;

      if (inverted) pass = actual != expected;
      else pass = actual == expected;

      if (pass) success();
      else fail("toEqual", actual, inverted, expected);
    }

    function toBeUndefined(actual, inverted) {
      var pass = false;

      if (inverted) pass = actual !== undefined;
      else pass = actual === undefined;

      if (pass) success();
      else fail("toBeUndefined", actual, inverted);
    }

    function toBeNull(actual, inverted) {
      var pass = false;

      if (inverted) pass = actual !== null;
      else pass = actual === null;

      if (pass) success();
      else fail("toBeNull", actual, inverted);
    }

    function toBeFasly(actual, inverted) {
      var pass = false;

      if (inverted) pass = actual != false;
      else pass = actual == false;

      if (pass) success();
      else fail("toBeFasly", actual, inverted);
    }

    function toContain(actual, pattern, inverted) {
      var pass = false;

      // Protect against null/undefined
      if (actual === null || actual === undefined) {
        fail("toContain", actual, inverted, pattern);
        return;
      }

      if (inverted) pass = actual.indexOf(pattern) === -1;
      else pass = actual.indexOf(pattern) !== -1;

      if (pass) success();
      else fail("toContain", actual, inverted, pattern);
    }

    function toBeLessThan(actual, threshold, inverted) {
      var pass = false;

      if (inverted) pass = actual > threshold;
      else pass = actual < threshold;

      if (pass) success();
      else fail("toBeLessThan", actual, inverted, threshold);
    }

    function toBeGreaterThan(actual, threshold, inverted) {
      var pass = false;

      if (inverted) pass = actual < threshold;
      else pass = actual > threshold;

      if (pass) success();
      else fail("toBeGreaterThan", actual, inverted, threshold);
    }

    function toBeLessThanOrEqual(actual, threshold, inverted) {
      var pass = false;

      if (inverted) pass = actual >= threshold;
      else pass = actual <= threshold;

      if (pass) success();
      else fail("toBeLessThanOrEqual", actual, inverted, threshold);
    }

    function toBeGreaterThanOrEqual(actual, threshold, inverted) {
      var pass = false;

      if (inverted) pass = actual <= threshold;
      else pass = actual >= threshold;

      if (pass) success();
      else fail("toBeGreaterThanOrEqual", actual, inverted, threshold);
    }

    // toMatch
    // toBeLessThan
    // toBeGreaterThan
    // toBeCloseTo
    // toThrow
    // toThrowError

    return {
      expect: function(a) {
        return {
          toBe: (e) => toBe(a, e),
          toEqual: (e) => toEqual(a, e),
          toBeUndefined: (e) => toBeUndefined(a),
          toBeNull: (e) => toBeNull(a),
          toBeFasly: (e) => toBeFasly(a),
          toContain: (p) => toContain(a, p),
          toBeLessThan: (t) => toBeLessThan(a, t),
          toBeGreaterThan: (t) => toBeGreaterThan(a, t),
          toBeLessThanOrEqual: (t) => toBeLessThanOrEqual(a, t),
          toBeGreaterThanOrEqual: (t) => toBeGreaterThanOrEqual(a, t),
          not: {
            toBe: (e) => toBe(a, e, true),
            toEqual: (e) => toEqual(a, e, true),
            toBeUndefined: (e) => toBeUndefined(a, true),
            toBeNull: (e) => toBeNull(a, true),
            toBeFasly: (e) => toBeFasly(a, true),
            toContain: (p) => toContain(a, p, true),
            toBeLessThan: (t) => toBeLessThan(a, t, true),
            toBeGreaterThan: (t) => toBeGreaterThan(a, t, true),
            toBeLessThanOrEqual: (t) => toBeLessThanOrEqual(a, t, true),
            toBeGreaterThanOrEqual: (t) => toBeGreaterThanOrEqual(a, t, true)
          }
        }
      }
    };
  }
}
