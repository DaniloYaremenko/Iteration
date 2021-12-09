'use strict';

const sum = (...args) => {
  let pos = 0;
  let ans = 0;
  while (pos < args.length) {
    ans += args[pos];
    pos++;
  }
  return ans;
};

module.exports = { sum };
