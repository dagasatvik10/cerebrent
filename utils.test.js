const utils = require('./utils');

test('getDifferenceInYearsAndMonths gets years and months difference between 2 dates', () => {
  let endDate = new Date('2023-05-01');
  let startDate = new Date('2022-01-01');
  let res = utils.getDifferenceInYearsAndMonths(startDate, endDate);
  expect(res.years).toBe(1);
  expect(res.months).toBe(4);

  endDate = new Date('2020-05-01');
  startDate = new Date('2015-08-01');
  res = utils.getDifferenceInYearsAndMonths(startDate, endDate);
  expect(res.years).toBe(4);
  expect(res.months).toBe(9);
});
