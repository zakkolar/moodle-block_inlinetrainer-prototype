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

		this._subscriptions=[];

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
				for (var i=0; i<this._subscriptions.length; i++){
					var subscription = this._subscriptions[i];
					subscription(complete);
				}
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
		},
		isComplete: function(){
			return this._complete;
		},
		subscribe: function(callback){
			this._subscriptions.push(callback);
		}


	};

	


	return Step;
});