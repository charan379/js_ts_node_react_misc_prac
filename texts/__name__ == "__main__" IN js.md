In Python, if __name__ == "__main__": is used to check if a file is being run directly or imported as a module.
JavaScript doesn’t have a built-in __name__ variable, but you can achieve similar behavior depending on the environment:

1. Node.js (CommonJS modules)
In Node.js, you can check if the current file is the entry point using:
Javascript// myscript.js
if (require.main === module) {
    console.log("This file is being run directly.");
} else {
    console.log("This file is being imported as a module.");
}

Explanation:

require.main is the module that was run first.
module is the current file’s module object.
If they match, the file is the main entry point.


2. ES Modules (Node.js ESM or Browser)
ES modules don’t have require.main, but in Node.js you can compare import.meta.url with the process’s entry file:
Javascript// myscript.mjs
import { fileURLToPath } from 'url';
import { basename } from 'path';

const currentFile = fileURLToPath(import.meta.url);
const entryFile = process.argv[1];

if (currentFile === entryFile) {
    console.log("This file is being run directly.");
} else {
    console.log("This file is being imported.");
}


3. Browser Environment
In browsers, there’s no direct equivalent because scripts are usually loaded by HTML.
You can simulate it by checking if the script is the first loaded or by using query parameters.
Example:
Javascriptif (window.location.pathname.endsWith("myscript.js")) {
    console.log("Running directly in browser (likely via script tag).");
}


✅ Recommendation:

Node.js CommonJS → use require.main === module
Node.js ES Modules → compare import.meta.url with process.argv[1]
Browser → no strict equivalent; depends on how the script is loaded.


If you want, I can give you a universal helper function that works for both CommonJS and ES Modules in Node.js so you can just call isMain() like in Python.
Do you want me to prepare that?
