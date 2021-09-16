const io = require("socket.io-client");
const { exec } = require("child_process");

const socket = io("https://rube-server.herokuapp.com/");

const cliCommand = "echo 'start your engines'";

socket.on("rube", function doCliStuff(data) {
  exec(cliCommand, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});
