import executor from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
var exect = executor.exec;
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var mainPath = path.dirname(fs.realpathSync(__filename));
function soundAlert() {
    var soundPath = path.join(mainPath, '../assets/sounds/complete');
    var linuxcmd = 'paplay ' + soundPath + '.ogg';
    var windowscmd = path.join(mainPath, './forWindows.vbs') + ' ' + soundPath + '.mp3';
    var maccmd = 'afplay ' + soundPath + '.mp3';
    var platform = process.platform;
    if (platform === 'linux') {
        return exec(linuxcmd);
    }
    else if (platform === 'win32') {
        return exec(windowscmd);
    }
    else if (platform === 'darwin') {
        return exec(maccmd);
    }
    function exec(cmd) {
        return exect(cmd, function (error, stdout, stderr) {
            if (error)
                console.error(error);
        });
    }
}
;
export default soundAlert;
