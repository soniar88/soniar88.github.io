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

console.log(Bill,Mary,Bill)

// Problem 2 

const Company = {
        "companyName" : "Tech Stars",
        "website":"www.techstars.site",
        "employees":[Sam,Mary,Bill,Anna]     
        }
console.log(Company)

// Problem 3 

function Employee(name,deparment,designation,saraly,raiseEligible ) {
    this.name = name;
    this.deparment = deparment;
    this.designation = designation;
    this.saraly =saraly;
    this.raiseEligible =raiseEligible;
    this.showConsole = function () {
      console.log(Employee);
    };
  }

// This didnt quite work
// const Anna = new Employee("Anna", "Tech", "Executive", 25600, false)

console.log(Anna)

//Problem 4


for (employees in Company['employees']);{
""
    salarySum += employees['salary']
    console.log(salarySum)

return salarySum
 }





//Problem 5     


//Problem 6


