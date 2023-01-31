import figlet from 'figlet'
import gradient from 'gradient-string';
//Helpers
import countdownMintutes from '../helper/countdown.js';
import progressBar from '../helper/progressBar.js';
import soundAlert from '../helper/soundAlert.js';
import notificationAlert from '../helper/notificationAlert.js';
//Types
import IPomodoroOptions from '../types/pomodoroTypes';

export default (minutes: number, options: IPomodoroOptions | null) => {

  // Default values to work pomodoro
  let counter = 0;
  const stepsInMinutes = minutes * 600;
  const initTime = new Date()
  const finalTime = new Date(initTime.getTime() + minutes * 60000)

  // Define gradient style
  const style = options.style ? options.style : 'retro'

  // Initializing progress to bar
  while (counter < stepsInMinutes) {
    let timeElapsed = countdownMintutes(finalTime);
    let timeElapsedMessage =
      timeElapsed
        ? timeElapsed
        : minutes === 1 ? minutes + ' minute' : minutes + ' minutes'

    const { currentStep, progress, percent, barLength } = progressBar(counter, stepsInMinutes);
    counter = currentStep

    if (options.bigTitle) {
      process.stdout.write(gradient[style](`${figlet.textSync(options.title)} \n`));
    } else {
      process.stdout.write(gradient[style](`${options.title} \n`));
    }
    process.stdout.write(`${initTime.toTimeString().substring(0, 5)} | ${timeElapsedMessage} \n`);
    process.stdout.write(gradient[style](`[${'\u2588'.repeat(progress)}${'\u2591'.repeat(barLength - progress)}] ${Math.round(Number(percent))} %`));


    let waitTill = new Date(new Date().getTime() + 100);
    while (waitTill > new Date()) { }

    // Finish process pomodoro
    if (currentStep === stepsInMinutes) {

      //Enabled sound notification if options alertSound is true: default true
      if (options?.alertSound) {
        soundAlert()
      }

      // Enabled system notification if options notify is true: default true
      if (options?.notify) {
        notificationAlert(options.title, options.description)
      }

      process.stdout.write(gradient[style](`\n Finish \n`));
      break;
    }
  }
}




