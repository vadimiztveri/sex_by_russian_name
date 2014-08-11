beforeEach(function () {
  jasmine.addMatchers({
    toBeMale: function() {
      return {
        compare:  function (actual) {
          return {
            pass: actual === SexByRussianName.MALE
          }
        }
      };
    },
    toBeFemale: function() {
      return {
        compare:  function (actual) {
          return {
            pass: actual === SexByRussianName.FEMALE
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
