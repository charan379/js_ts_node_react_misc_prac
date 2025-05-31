const sals = [
    { name: "Mounika", department: "IT", salary: 70000 },
    { name: "Charan", department: "IT", salary: 80000 },
    { name: "Ram", department: "HR", salary: 60000 },
    { name: "Arthi", department: "HR", salary: 70000 },
    { name: "Ashok", department: "Network", salary: 90000 },
    { name: "Vamsi", department: "IT", salary: 40000 },
    { name: "Kishore", department: "Support", salary: 30000 }
];

function getLowestSals(arr) {

    const lowestSalEmps = arr.reduce((acc, emp) => {

        let empDept = emp.department;

        if (acc[empDept]) {
            if (acc[empDept]['salary'] > emp.salary) {
                acc[empDept] = emp;
            }
        } else {
            acc[empDept] = emp
        };

        return acc
    }, {})

    return lowestSalEmps;
};

console.log(getLowestSals(sals))