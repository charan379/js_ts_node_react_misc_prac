'use strict';
const dateStrArg = process.argv.slice(2)[0];
if (!dateStrArg) {
    throw new Error("No String arg");
}

function getDate(dateStr) {
    const dateRegx = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    const match = dateStr.match(dateRegx);

    const date = new Date(Date.UTC(
        Number(match[3]), // GROUP 1
        Number(match[2]) - 1, // GROUP 2
        Number(match[1]), // GROUP 3
    ));

    return date;
};

console.log(getDate(dateStrArg).toUTCString());

