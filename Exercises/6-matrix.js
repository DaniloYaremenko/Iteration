'use strict';

const max = (matrix) => {
  let result = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (element > result) result = element;
    }
  }
  return result;
};

module.exports = { max };
