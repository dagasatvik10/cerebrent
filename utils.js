/**
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns
 */
function getDifferenceInYearsAndMonths(startDate, endDate) {
  if (endDate.getMonth() - startDate.getMonth() >= 0) {
    return {
      years: endDate.getFullYear() - startDate.getFullYear(),
      months: endDate.getMonth() - startDate.getMonth(),
    };
  } else {
    return {
      years: endDate.getFullYear() - startDate.getFullYear() - 1,
      months: 12 + endDate.getMonth() - startDate.getMonth(),
    };
  }
}

/**
 *
 * @param {string|Date} date
 */
function getDateObject(date) {
  if (typeof date == 'string') {
    return new Date(date);
  }
  return date;
}

module.exports = {
  getDifferenceInYearsAndMonths,
  getDateObject,
};
