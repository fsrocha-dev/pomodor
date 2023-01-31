import notifier from 'node-notifier'
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function notificationAlert(title: string, description?: string) {
  const mainPath = path.dirname(fs.realpathSync(__filename));

  notifier.notify({
    title: title,
    message: description ? description : 'PomodoroMe',
    icon: path.join(mainPath, '../assets/icons/icon.jpg'),
    wait: true,
  });
}

export default notificationAlert