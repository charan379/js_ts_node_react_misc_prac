const sals = [
    { name: "Mounika", department: "IT", salary: 70000 },
    { name: "Charan", department: "IT", salary: 80000 },
    { name: "Ram", department: "HR", salary: 60000 },
    { name: "Arthi", department: "HR", salary: 70000 },
    { name: "Ashok", department: "Network", salary: 90000 },
    { name: "Vamsi", department: "IT", salary: 40000 },
    { name: "Kishore", department: "Support", salary: 30000 }
];

const higestSals = {};

for (let emp of sals) {
    const empDept = emp.department;
    if (higestSals[empDept]) {
        if (higestSals[empDept]["salary"] < emp.salary) {
            higestSals[empDept] = emp;
        } else {
            continue;
        }
    } else {
        higestSals[empDept] = emp
    }
}

console.log(higestSals)