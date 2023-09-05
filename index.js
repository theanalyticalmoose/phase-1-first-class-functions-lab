// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
  };
  

  