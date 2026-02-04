
// Debounce function to delay the calls
function debounce(func, delay) {
    let timeoutId; // Stores the reference to the timeoutId
    
    return function(...args) {
      clearTimeout(timeoutId); // Cancel Previous Timer
      
      // Start new timer
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
      
    }
}


function printNumber() {
   console.log("This is a printNumber function getting called : ", Date.now());
};

printNumber()
printNumber()
printNumber()
printNumber()

const debouncedPrintNumber = debounce(printNumber, 1000)

debouncedPrintNumber()
debouncedPrintNumber()
debouncedPrintNumber()
debouncedPrintNumber()
