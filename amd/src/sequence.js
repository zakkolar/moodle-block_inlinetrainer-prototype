define(function(){
	function Sequence(title,steps){
		this._title=title;
		this._steps=[];
		this.addSteps(steps);

		var currentStepIndex=0;
		this._currentStep=steps[currentStepIndex];

		this._subscriptions=[];

		Object.defineProperty(this,'_currentStepIndex',{
			get:function(){
				return currentStepIndex;
			},
			set:function(index){
				if(index<0 || index>this._steps.length-1){
					throw new RangeError("Index is out of bounds");
				}
				currentStepIndex=index;
				this._currentStep=this._steps[index];
				for (var i=0; i<this._subscriptions.length; i++){
					var subscription = this._subscriptions[i];
					subscription(this);
				}
			},
			
		});

	
	}

	Sequence.prototype={
		constructor:Sequence,
		addSteps:function(steps){
			this._steps.concat(steps);
			this._currentStepIndex=this._currentStepIndex;
		},
		getSteps:function(){
			return this._steps;
		},
		subscribe:function(callback){
			this._subscriptions.push(callback);
		},
		getTitle:function(){
			return this._title;
		}
	};

	return Sequence;
});