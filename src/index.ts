import figlet from 'figlet'
import { Command } from 'commander';
import pomodoro from './lib/pomodoro.js';
import pkg from '../package.json' assert { type: "json" };

import IPomodoroOptions from './types/pomodoroTypes';

const program = new Command();

let settings: IPomodoroOptions = {}

enum PomodoroStyles {
  rainbow = 'rainbow',
  morning = 'morning',
  pastel = 'pastel',
  mind = 'mind',
  retro = 'retro',
}

enum PomodoroCycles {
  work = 30,
  coffee = 10,
  break = 5,
}

console.log(figlet.textSync("PomodoroMe"));

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version);

program
  .option('-c, --cycle <value>', 'Inform a value to start the pomodoro, you can use the following: work, break, coffee or inform the time in minutes ex: 10', 'work')
  .option('-t, --title <value>', 'Enter a title for your pomodoro', 'Initialized Pomodoro')
  .option('-d, --description <value>', 'Enter a description for your pomodoro', 'Lets Go')
  .option('-s, --style <value>', 'Enter a style for the pomodoro, you can use the following: rainbow ,morning, pastel, mind or retro', 'morning')
  .option('-bt, --big-title', 'Show the title of the giant pomodoro')
  .option('-as, --alert-sound', 'Enable sound when completing pomodoro')
  .option('-nt, --notify', 'Enable system notification when completing pomodoro')
  .action((newSettings) => {
    let cycleValue = null
    if (!Object.values(PomodoroStyles).includes(newSettings.style)) {
      throw new Error('Error: Please enter a valid style =>  rainbow ,morning, pastel, mind or retro')
    }

    if (!Object.values(PomodoroCycles).includes(newSettings.cycle)) {
      cycleValue = parseInt(newSettings.cycle)
      if (isNaN(cycleValue))
        throw new Error('Error: Please enter a valid cycle =>  work, coffee, break or value in minutes ex: 10')
    }

    settings = { ...newSettings, cycle: cycleValue ? cycleValue : PomodoroCycles[newSettings.cycle] }
  })

try {
  program.parse(process.argv);
  pomodoro(settings.cycle, { ...settings });
} catch (err) {
  console.log(err.message)
}