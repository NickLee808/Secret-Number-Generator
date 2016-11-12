'use strict';

module.exports = function secNum() {
  let num = Math.random()*1000000;
  return function secNumGen(){
    return num;
  };
};