/*
---
description: A very simple class that allows stacking functions and calling them step by step or priodiacly.

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.2.4: Class

provides: [FunctionStack]

...
*/
/*!
Copyright (c) 2009 Arieh Glazer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE 
*/
var FunctionStack = new Class({
	handle : $empty, //holder of interval pointer
	list : [(function(){this.stop();}).bind(this)], //stack holder
	index : 0, //current stack index
	defaultDuration : 1000, //default timeout between function calls
	initialize: function(){
		this.push.apply(this,arguments || []);
	},
	push : function(){
		var func = this.list.pop();
		this.list.extend(arguments);
		this.list.push(func);
	},
	step : function(){
		if (this.index < this.list.length) return this.list[this.index++].run(arguments || []);
		return null;
	},
	play : function(duration,args){
		this.handle = this.step.periodical(duration || this.defaultDuration, this, args || []);
		return this;
	},
	stop : function(){
		$clear(this.handle);
		this.reset();
		return this;
	},
	pause : function(){
		$clear(this.handle);
		return this;
	},
	reset : function(){
		this.index = 0;
		return this;
	},
	clear : function(){
		this.reset();
		this.list =  [(function(){this.stop();}).bind(this)];
		return this;
	}
});
