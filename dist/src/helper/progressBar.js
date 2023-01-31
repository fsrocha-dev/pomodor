function progressBar(currentStep, totalSteps) {
    var clearScreenEvery = 1;
    var barLength = 40;
    // Counter to track progress and clear terminal every x iteration
    if (currentStep % clearScreenEvery === 0) {
        console.clear();
    }
    currentStep++;
    // Calculate percentege of progress based on totalSteps seconds
    var progress = Math.round(currentStep * barLength * 1.0 / totalSteps);
    var percent = (currentStep * 100.0 / totalSteps).toFixed(2);
    return { currentStep: currentStep, progress: progress, percent: percent, barLength: barLength };
}
export default progressBar;
