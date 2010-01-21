Class: FunctionStack {#FunctionStack}
==========================================

A very simple class that allows stacking functions and calling them step by step or priodiacly.

### Demo
[Demo @ gh-pages](http://arieh.github.com/FunctionStack/)


FunctionStack Method: constructor {#FunctionStack:constructor}
---------------------------------------------------------------
### Syntax

	var stack = new FunctionStack([function1[,function2[,...]]]);

### Arguments

an unlimited list of functions

FunctionStack Method: Push {#FunctionStack:push}
-------------------------------------------------
<big>Pushes functions into the stack</big>

### Syntax
	stack.push(function1[,function2[,...]]);

FunctionStack Method: Step {#FunctionStack:step}
------------------------------------------------
<big>Will call the next function in the stack. If any paramaters were provided, will send them to the function.</big>

### Syntax
	stack.step([arg1[,arg2[,...]]]);

### Arguments

The method will pass any arguments passed to it to the called function

### Returns

The method will return the returned value of the last function called.

FunctionStack Method: Play {#FunctionStack:play}
-------------------------------------------------
<big>Will start a periodical call to the functions in the stack</big>

### Syntax
	stack.play(duration,args);

### Arguments
1. duration (`int` defaults to 1000): a duration to wait between calls.
2. args (`array`): an array of paramaters to send to the functions

### Returns 
Will return the FunctionStack instance

FunctionStack Method: Pause {#FunctionStack:pause}
---------------------------------------------------
<big>Will pause stack calls without reseting the index</big>

### Syntax
	stack.pause();

### Returns 
Will return the FunctionStack instance	

FunctionStack Method: Stop {#FunctionStack:stop}
--------------------------------------------------
<big>Stops the stock periodiacl calls. Will reset the index</big>

### Syntax
	stack.stop()

### Returns 
Will return the FunctionStack instance	

FunctionStack Method: Reset {#FunctionStack:reset}
----------------------------------------------------
<big>Resests the stack index</big>

### Syntax
	stack.reset()

### Returns 
Will return the FunctionStack instance

FunctionStack Method: Clear {#FunctionStack:clear}
---------------------------------------------------
<big>Clears the stack</big>

### Syntax
	stack.clear()

### Returns 
Will return the FunctionStack instance