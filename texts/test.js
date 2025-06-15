const fs = require("fs");

fs.readFile("./mernCheckList.md", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  const lines = data.split("\n");

  const mernCheckList = [];

  for (let line of lines) {
    const trimmed = line.trim();

    if (trimmed.endsWith(":")) {
      mernCheckList.push("### " + line.toString().trim());
      continue;
    }

    if (trimmed === "") {
      mernCheckList.push(line.toString().trim());
      continue;
    }

    if (trimmed && !trimmed.startsWith("#") && !trimmed.endsWith(":")) {
      mernCheckList.push("- " + line.toString().trim());
      continue;
    }
  }

  fs.appendFile("./mernCheckList.md", mernCheckList.join("\n"), (err) => {
    if (err) {
      console.log("fail");
    } else {
      console.log("done");
    }
  });
});
