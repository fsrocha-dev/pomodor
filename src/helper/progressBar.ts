interface IProgressBarResponse {
  currentStep: number;
  progress: number;
  percent: string;
  barLength: number
}

function progressBar(currentStep: number, totalSteps: number): IProgressBarResponse {

  const clearScreenEvery = 1;
  const barLength = 40;

  // Counter to track progress and clear terminal every x iteration
  if (currentStep % clearScreenEvery === 0) { console.clear() }

  currentStep++;

  // Calculate percentege of progress based on totalSteps seconds
  const progress = Math.round(currentStep * barLength * 1.0 / totalSteps);
  const percent = (currentStep * 100.0 / totalSteps).toFixed(2);

  return { currentStep, progress, percent, barLength };
}

export default progressBar