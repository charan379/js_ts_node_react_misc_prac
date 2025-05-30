e concurrency
The Promise class offers four static methods to facilitate async task concurrency:

Promise.all()
Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

Promise.allSettled()
Fulfills when all promises settle.

Promise.any()
Fulfills when any of the promises fulfills; rejects when all of the promises reject.

Promise.race()
Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.




Feature	       |   Promise .then()	        | Async/Await
-----------------------------------------------------------------------------------
Syntax	       |   Callback-based	        | Cleaner, sync-like
Readability	   |   Complex with chaining    | Easier to follow
Error Handling |   .catch()	                | try/catch block
Nesting Issues |   Can become callback hell | Flat structure, avoids deep nesting