const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = function (peopleNames) {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
