import notifier from 'node-notifier'
import path from 'node:path';
import fs from 'node:fs';

function notificationAlert(title: string, description?: string) {
  const mainPath = path.dirname(fs.realpathSync(__filename));

  notifier.notify({
    title: title,
    message: description ? description : 'Pomodor',
    icon: path.join(mainPath, '../assets/icons/icon.jpg'),
    wait: true,
  });
}

export default notificationAlert