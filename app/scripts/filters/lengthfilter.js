'use strict';

/**
 * @ngdoc filter
 * @name davinciNfcDecoderApp.filter:lengthFilter
 * @function
 * @description
 * # lengthFilter
 * Filter in the davinciNfcDecoderApp.
 */
angular.module('davinciNfcDecoderApp')
  .filter('lengthFilter', function () {
    return function (input) {
      input = input || null;
      if (!input) {return '';}

      var dataArray = input.split(" ");
      return (parseInt(dataArray.reverse().join(''), 16)/1000).toString() + 'm';
      //console.debug(dataArray.reverse());
      //return 'lengthFilter filter: ' + input;
      //return result + 'm';
    };
  });
