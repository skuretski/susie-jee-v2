const fs = require('fs');

let string = "";
for(let i = 0; i < 245000; i++){
	string += "* ";
}

fs.writeFile('stars.txt', string, (err) => {
	if(err) throw err;
	console.log("done")
})

