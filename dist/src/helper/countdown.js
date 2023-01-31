import countdown from 'countdown';
function countdownMintutes(finalTime) {
    countdown.setLabels('|s|m|h|d||||||', '|s|m|h|d||||||', '', '', '');
    return countdown(new Date().getTime(), finalTime, countdown.MINUTES | countdown.SECONDS).toString();
}
export default countdownMintutes;
