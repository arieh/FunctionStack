Class: FunctionStack {#FunctionStack}
==========================================

A small wrapper to the Chan class to supply easy perodical function calls. 

### Demo
* [Demo @ mooshell](http://mootools.net/shell/6jPMZ/2/)


FunctionStack Method: constructor {#FunctionStack:constructor}
---------------------------------------------------------------
### Syntax

	var stack = new FunctionStack(
		function(){/* do something */},
		function(){/* do something */},
		function(){/* do something */}
	);

### Arguments

a list of functions.

FunctionStack Method: Push (#FunctionStack:push}
-------------------------------------------------
<big>Pushes functions into the stack</big>

### Syntax
	stack.push(
		function(){/* do something */},
		function(){/* do something */},
		function(){/* do something */}
	);

FunctionStack Method: Step {#FunctionStack:step}
------------------------------------------------
<big>Will call the next function in the stack. if any paramaters were provided, will send them to the function</big>

### Syntax
	stack.step(var1,var2,var3 /*....*/);

FunctionStack Method: Play {#FunctionStack:play}
-------------------------------------------------
<big>Will start a periodical call to the functions in the stack</big>

### Syntax
	stack.play(duration,args);

### Arguments
1. duration (`int` defaults to 1000): a duration to wait between calls.
2. args (`array`): an array of paramaters to send to the functions

FunctionStack Method: Pause {#FunctionStack:pause}
---------------------------------------------------
<big>Will pause stack calls without reseting the index</big>

### Syntax
	stack.pause();
	
FunctionStack Method: Stop {#FunctionStack:stop}
--------------------------------------------------
<big>Stops the stock periodiacl calls. Will reset the index</big>

### Syntax
	stack.stop()
	
FunctonStack Method: Reset {#FunctionStack:reset}
----------------------------------------------------
<big>Resests the stack index</big>

### Syntax
	stack.reset()

FunctionStack Method: Clear {#FunctionStack:clear}
---------------------------------------------------
<big>Clears the stack</big>

### Syntax
	stack.clear()