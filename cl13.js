// JavaScript Document Challenge 13 - Make a car object
	function car(year, make, model, color, style, engine, trans, fuel) {
		this.year = year;
		this.make = make;
		this.model = model;
		this.color = color;
		this.style = style;
		this.engine = engine;
		this.trans = trans;
		this.fuel = fuel;		
	};
	
	var davidsCar = new car("1965", "Ford", "Mustang", "Tropical Turquoise", "convertible", "6-cylinder", "4-speed", "gas");
	console.log(davidsCar)