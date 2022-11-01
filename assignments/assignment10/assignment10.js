// Problem 1
const Sam = { "firsName":"Sam",
            "deparment":"Tech",
            "designation":"Manager",
            "saraly": 40000,
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

console.log("PROBLEM 1")
console.log(Sam,Mary,Bill,Anna);

// Problem 2 

const company = {
        "companyName" : "Tech Stars",
        "website":"www.techstars.site",
        "employees":[Sam,Mary,Bill,Anna]     
        }
console.log("PROBLEM 2")
console.log(company);

// Problem 3 
console.log("PROBLEM 3")
console.log(Anna);

//Problem 4
workersList = company.employees;
let totalSalary =0; 
for (const worker of workersList){
    totalSalary += worker.saraly;
}

console.log("PROBLEM 4");
console.log(`The total saraly is $ ${totalSalary}` );

//Problem 5     
function newSalary(company,workersList){
    for (const worker of workersList){
        if (worker.raiseEligible === "true"){
            worker.saraly = worker.saraly *1.1;
            worker.raiseEligible = "false";
        }
    }
}
console.log("PROBLEM 5");
newSalary(company,workersList);
console.log(company.employees);
//Problem 6

const WFH = ['Anna','Sam'];
for (const worker of workersList){
    if (WFH.includes(worker.firsName)){
        worker.WFH = "true";
    }
    else { 
        worker.WFH = "false"
    }

}

console.log("PROBLEM 6")
console.log(company.employees)