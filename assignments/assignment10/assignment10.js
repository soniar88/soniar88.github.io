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
console.log(Bill,Mary,Bill)

// Problem 2 

const Company = {
        "companyName" : "Tech Stars",
        "website":"www.techstars.site",
        "employees":[Sam,Mary,Bill]     
        }
console.log(Company)

// Problem 3


// Problem 4
function Salary() 
{ for (employee in Company[2]);
    saralySum += employee[2]
    return(saralySum)
    }
  