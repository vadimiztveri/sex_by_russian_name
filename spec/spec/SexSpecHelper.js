beforeEach(function () {
  jasmine.addMatchers({
    toBeMale: function() {
      return {
        compare:  function (actual) {
          return {
            pass: actual === Sex.MALE
          }
        }
      };
    },
    toBeFemale: function() {
      return {
        compare:  function (actual) {
          return {
            pass: actual === Sex.FEMALE
          }
        }
      };
    },
    toBeUndefined: function() {
      return {
        compare:  function (actual) {
          return {
            pass: actual === undefined
          }
        }
      };
    }
  });
});
