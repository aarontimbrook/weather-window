// code to start IIS Express from VS Code command prompt
var execFile = require('child_process')
.execFile;

const IIS_PATH = 'C\\Program Files (x86)\\IIS Express\\iisexpress.exe';
const APPLICATIONHOST_CONFIG_PATH = '..\\..\\.vs\\config\\applicationhost.config';
const APPLICATION_NAME = 'WeatherWindow.Service';

var args = [
    `/config:${APPLICATIONHOST_CONFIG_PATH}`,
    `/site:${APPLICATION_NAME}`
];

var childProcess = execFile(IIS_PATH, args, {});

childProcess.stdout.on('data', function(data) {
    console.log(removeTrailingLinebreak(data));
});

childProcess.stderr.on('data', function(data) {
    console.log(removeTrailingLinebreak(data));
});

var removeTrailingLinebreak = function(input) {
    return input.replace(/\s+$/, '');
}

// add this command to package.json
// "iis": "node start-iis-express.js"

// execute this command at prompt: 'npm run iis' and the server should boot up
