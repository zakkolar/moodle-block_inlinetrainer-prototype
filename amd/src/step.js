/* jshint devel: true  */
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
		this._watchComplete=params.watchComplete || function(){};
		this._watchUncomplete=params.watchUncomplete || function(){};

		this._id=guid();

		var complete=false;
		
		Object.defineProperty(this,"_complete",{
			get: function(){ return complete;},
			set: function(val){
				complete=val;
				if(complete){
					this._watchUncomplete();
				}
				else{
					this._watchComplete();
				}

				console.log(this._text,val);
			}
		});

		this._watchComplete();
		
	}

	Step.prototype={
		constructor: Step,
		getText: function(){
			return this._text;
		},
		getId: function(){
			return this._id;
		},
		complete:function(){
			this._complete=true;
		},
		uncomplete: function(){
			this._complete=false;
		}

	};

	


	return Step;
});