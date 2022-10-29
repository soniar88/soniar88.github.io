// Problem 1
const Sam = { "firsName":"Sam",
            "deparment":"Tech",
            "designation":"Manager",
            "saraly": 4000,
            "raiseEligible":true}
            
const Mary = {"firsName":"Mary",
            "deparment":"Finace",
            "designation":"Trainee",
            "saraly":18500,
            "raiseEligible":true }

            
 const Bill = {"firsName":"Bill",
            "deparment":"HR",
            "designation":"Executive",
            "saraly":21200,
            "raiseEligible":false}

 const Anna = {"firsName":"Anna",
            "deparment":"Tech",
            "designation":"Executive",
            "saraly":256200,
            "raiseEligible":false}

console.log(Sam,Mary,Bill,Anna);

// Problem 2 

const Company = {
        "companyName" : "Tech Stars",
        "website":"www.techstars.site",
        "employees":[Sam,Mary,Bill,Anna]     
        }
console.log(Company);

// Problem 3 

console.log(Anna);

//Problem 4

let workers = Company.employees;

for (let i=0; i > workers.length;i++){
    console.log(workers[i])
}




//Problem 5     


//Problem 6


