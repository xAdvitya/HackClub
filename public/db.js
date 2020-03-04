const fs = require('fs');

let data = fs.readFileSync('data.json')

var obj = JSON.parse(data)

obj.person1.name = "addy";

var newobj = JSON.stringify(obj);

fs.writeFileSync('data.json',newobj);

console.log(obj.person1.name);