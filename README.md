FunctionStack
========
A very simple class that allows stacking functions and calling them step by step or priodiacly.
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

1. push : recives an unlimited list of functions. adds them to the stack
2. step : will call the next function in the stack. if any paramaters were sent, will send them to the function
3. play (`int` duration, `array` args) : will step through the stack priodicaly. if args is supplied, will pass them to the functions
4. pause : will pause the periodical call
5. stop : will stop the periodcal call, reseting the counter
6. reset : will reset the stack index
7. clear : will clear the stack

