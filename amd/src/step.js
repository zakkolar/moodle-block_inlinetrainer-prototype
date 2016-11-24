define([],function(){
	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}
		function Step(params){
		this._text=params.text;
		this._completed=params.completed || function(){};
		this._id=guid();
	}

	Step.prototype={
		constructor: Step,
		getText: function(){
			return this._text;
		},
		getId: function(){
			return this._id;
		}

	};

	return Step;
});