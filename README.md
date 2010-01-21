FunctionStack
========
A very simple class that allows stacking functions and calling them step by step or priodiacly.
This class is different from Chain in few ways:

1. It is ment to be used as a periodical caller - the play method.
2. It is posible to pass arguments to the functions in the stack.
3. It is not ment to be implemented by other classes (class method names are trivial and probably will be needed by implementors (push, play, clear, reset, stop, pause)

![Screenshot](http://github.com/arieh/FunctionStack/raw/master/screenshot.png)

How to use
----------

This is quite stright farward:

	#JS
	var stack = new FunctionStack(
		function(){console.log('a');},
		function(){console.log('b');},
		function(){console.log('c');},
		function(){console.log('d');},
		function(){console.log('e');}
	);
	
	stack.step(); //will call log 'a'
	
	stack.play(); //will log 'b' 'c' 'd' 'e' periodicaly (defualt to 1000 miliseconds)

Methods
--------

1. push (`function`[,`function`[,...]]): Recives an unlimited list of functions. Adds them to the stack.
2. step : Will call the next function in the stack. If any paramaters were sent, will send them to the function.
3. play (`int` duration, `array` args) : Will step through the stack priodicaly. If args is supplied, will pass them to the functions.
4. pause : Will pause the periodical call.
5. stop : Will stop the periodcal call, reseting the counter.
6. reset : will reset the stack index.
7. clear : will clear the stack.

