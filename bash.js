const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

// Output a prompt
process.stdout.write("prompt > "); //data flowing out of the program

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  // data into the program  //on is the listener?
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.includes("cat")) {
    const arr = cmd.split(" ");
    const fileName = arr[1];
    cat(fileName);
  }
});
