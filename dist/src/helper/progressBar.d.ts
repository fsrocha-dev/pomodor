interface IProgressBarResponse {
    currentStep: number;
    progress: number;
    percent: string;
    barLength: number;
}
declare function progressBar(currentStep: number, totalSteps: number): IProgressBarResponse;
export default progressBar;
