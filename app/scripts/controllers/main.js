'use strict';

/**
 * @ngdoc function
 * @name davinciNfcDecoderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the davinciNfcDecoderApp
 */
angular.module('davinciNfcDecoderApp')
  .controller('MainCtrl', function () {
    var main = this;
		main.tagData = [];
		for (var i=0;i<23;i++) {
			main.tagData.push("");
		}
		main.tagData[20]= "CA 92 04 00";
		console.debug(main.tagData);

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		this.setLengthTo = function(length) {
		};
  });
// vim: set filetype=angular : set autoindent :
