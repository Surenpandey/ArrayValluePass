interface IEmployee {
  empCode: string[];
  empName: string[];
}

let emp1: Readonly<IEmployee> = {
  empCode:["aa", "bb", "vv"],
  empName: ["ba", "ab", "vvvv"]
}


let emp2: IEmployee = {
  empCode:["aa", "bb", "vv"],
  empName: ["ba", "ab", "vvvv"]
}

emp2.empCode = ["aa", "bb", "vv"]; // OK
emp2.empName = ["ba", "ab", "vvvv"]; // OK
// console.log(emp2.empCode[0])

export {emp2}
