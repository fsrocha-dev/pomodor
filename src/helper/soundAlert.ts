import executor from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

const exect = executor.exec
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mainPath = path.dirname(fs.realpathSync(__filename));

function soundAlert() {

  const soundPath = path.join(mainPath, '../assets/sounds/complete');

  const linuxcmd = 'paplay ' + soundPath + '.ogg';
  const windowscmd = path.join(mainPath, './forWindows.vbs') + ' ' + soundPath + '.mp3';
  const maccmd = 'afplay ' + soundPath + '.mp3';

  const platform = process.platform;

  if (platform === 'linux') {
    return exec(linuxcmd);
  } else if (platform === 'win32') {
    return exec(windowscmd);
  } else if (platform === 'darwin') {
    return exec(maccmd);
  }

  function exec(cmd) {
    return exect(cmd, function (error, stdout, stderr) {
      if (error) console.error(error);
    });
  }
};

export default soundAlert