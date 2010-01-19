/*
---
description: A small wrapper to the Chan class to supply easy prodical function calls

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.2.4: Class
- core/1.2.4: Class.Extras

provides: FunctionStack

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
	handle : $empty,
	list : [(function(){this.stop();}).bind(this)],
	index : 0,
	defaultDuration : 1000,
	initialize: function(){
		this.push(arguments || []);
	},
	push : function(){
		var func = this.list.pop();
		this.list.extend($A(arguments).flatten());
		this.list.push(func);
	},
	step : function(){
		if (this.index < this.list.length) this.list[this.index++].create({'arguments' : arguments || []});
	},
	play : function(duration,args){
		this.handle = this.step.bind(this).periodical(duration || this.defaultDuration, args || []);
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
		var self = this;
		
		this.reset();
		this.list =  [(function(){this.stop();}).bind(this)];
		return this;
	}
});
