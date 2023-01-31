import figlet from 'figlet';
import gradient from 'gradient-string';
//Helpers
import countdownMintutes from '../helper/countdown.js';
import progressBar from '../helper/progressBar.js';
import soundAlert from '../helper/soundAlert.js';
import notificationAlert from '../helper/notificationAlert.js';
export default (function (minutes, options) {
    // Default values to work pomodoro
    var counter = 0;
    var stepsInMinutes = minutes * 600;
    var initTime = new Date();
    var finalTime = new Date(initTime.getTime() + minutes * 60000);
    // Define gradient style
    var style = options.style ? options.style : 'retro';
    // Initializing progress to bar
    while (counter < stepsInMinutes) {
        var timeElapsed = countdownMintutes(finalTime);
        var timeElapsedMessage = timeElapsed
            ? timeElapsed
            : minutes === 1 ? minutes + ' minute' : minutes + ' minutes';
        var _a = progressBar(counter, stepsInMinutes), currentStep = _a.currentStep, progress = _a.progress, percent = _a.percent, barLength = _a.barLength;
        counter = currentStep;
        if (options.bigTitle) {
            process.stdout.write(gradient[style]("".concat(figlet.textSync(options.title), " \n")));
        }
        else {
            process.stdout.write(gradient[style]("".concat(options.title, " \n")));
        }
        process.stdout.write("".concat(initTime.toTimeString().substring(0, 5), " | ").concat(timeElapsedMessage, " \n"));
        process.stdout.write(gradient[style]("[".concat('\u2588'.repeat(progress)).concat('\u2591'.repeat(barLength - progress), "] ").concat(Math.round(Number(percent)), " %")));
        var waitTill = new Date(new Date().getTime() + 100);
        while (waitTill > new Date()) { }
        // Finish process pomodoro
        if (currentStep === stepsInMinutes) {
            //Enabled sound notification if options alertSound is true: default true
            if (options === null || options === void 0 ? void 0 : options.alertSound) {
                soundAlert();
            }
            // Enabled system notification if options notify is true: default true
            if (options === null || options === void 0 ? void 0 : options.notify) {
                notificationAlert(options.title, options.description);
            }
            process.stdout.write(gradient[style]("\n Finish \n"));
            break;
        }
    }
});
