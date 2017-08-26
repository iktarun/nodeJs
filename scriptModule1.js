console.log("ScriptModule1::");
var mod = require("./scriptMainModule.js");
var obj = new mod();
obj.name('Tarun','Kumar');
obj.consoleLog();

