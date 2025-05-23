// months are starts from 0
//  0 = jan, 11 = Dec

const d = new Date(Date.UTC(2025, 4, 21));

// Convert to IST
const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
const istDate = new Date(d.getTime());

console.log(istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));