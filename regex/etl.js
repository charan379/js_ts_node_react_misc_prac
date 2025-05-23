"use strict";

const fs = require("fs");

const all = [];

fs.readFile("./file.txt", "utf-8", (err, fileData) => {
    if (err) {
        console.log(err);
        throw err;
    }
    var currentSection = null;

    // parse line by line
    fileData.split(/\r?\n/).forEach((line, i) => {

        var match;

        // if just a space or start with the ; a comments
        if (/^\s*(;.*)?$/.test(line)) {
            return;
        } else if (match = line.match(/^\[(.*)\]$/)) {
            // if name match that means the current section is completed - push it to all
            if (currentSection) {
                all.push(currentSection);
            }

            // add name as it is in the Group - 1, the match will be at index 1 since the whole matched string will at index 0 ; ie: [larry] = i-0, larry = i-1 as it is in the group
            currentSection = { name: match[1], fields: {} };

        } else if (match = line.match(/^(\w+)=(.*)$/)) {
            // add the fields for the current section
            currentSection.fields = { ...currentSection.fields, [match[1]]: match[2] }
        }

        // console.log(`line ${i} : ${line}`);

    });

    // if not more lines are pending then 
    if (currentSection) {
        all.push(currentSection);
    }
    console.log(all)
});