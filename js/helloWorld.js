// test script for JS functionality (CHANGE LATER)

// rng variables
let factor = 3;
let denom = 5;

// rng generator
function rngDiv(factor,denom){
	var rand = Math.floor(Math.random()*50); // rng variable
	switch(rand%factor){
		case 0: document.write(rand/denom); break; // print rand value divided by denominator
		case 1: document.write("trolled"); break;
		case 2: document.write("Obama");
	}
}

rngDiv(factor,denom); // call rngDiv function
