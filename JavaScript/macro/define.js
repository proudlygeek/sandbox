macro define {
	rule { $name } => {
		var $name
	}

	rule { $name = $expr } => {
		var $name = $expr
	}
}

define x = 5;

console.log(x);
