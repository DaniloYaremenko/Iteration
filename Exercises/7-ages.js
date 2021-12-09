'use strict';

const ages = (persons) => {
  const data = {};
  for (const member in persons) {
    const person = persons[member];
    data[member] = person.died - person.born;
  }
  return data;
};

module.exports = { ages };
