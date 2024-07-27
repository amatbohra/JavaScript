//story behind the execution of javascript code 
// for every code three steps of execution takes place:
// 1) Global Execution Context(mandatory assigning values to "this")
// 2) Functional Execution Context
// 3) Eval Execution Context(future ki kahani for mongoose)

//execution happens in two phases:
// 1) memory creation phase [MCP]
// 2) execution phase [EP]

// in memory creation the global variables get allocated with a memory and their values are stored as undefined, for functions they are given memory with defination name/value

//in execution the values of variables get assigned to them and for functions new execution environment is created which again follows the whole procedure of MCP & EP. Final results in functions that are calculated then get assigned to other global variaBLES declared outside 

//once execution of new EC of function is done then it gets deleted 

//based on stack lifo rule, functions get executed 
//call stack: if function two is inside function one, then first function one gets executed and it stays in stack while on top of it function two gets called and is executed & then deleted after this only function one will get deleted. 