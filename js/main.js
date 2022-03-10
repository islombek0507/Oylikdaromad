
var users = {
    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },
  
    "Oybek": {
        name: "Oybek",
        surname: "sattorov",
        age: 36,
        salary: 1500
    },
  
    "Umid": {
        name: "Umid",
        surname: "Abdushukurov",
        age: 21,
        salary: 400
    }
}

function sumSalary(item) {
      
    var Sum=0;
    for (const key in item) {
       Sum+=item[key].salary;
    }
    return Sum;
}

function avarageAge(item2) {
    var  avarSum=0, i=0;
    
  	for (const key in item2) {
           i++;
        avarSum+=item2[key].age;
        
      }
 var  avar=avarSum/i;
    return  avar;
}



console.log(sumSalary(users));


console.log(avarageAge(users));
    
