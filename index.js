const returnFirstTwoDrivers = function(array) {
  return [array[0], array[1]];
}

const returnLastTwoDrivers = function(array) {
  return [array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier {
  return function (integer) {
    integer * integer;
  }
}
