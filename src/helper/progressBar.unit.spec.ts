import progressBar from "./progressBar"

describe(("Helper > progressBar"), () => {
  it("should return properties", () => {
    let currentStep = 0
    const totalSteps = 100
    const barLength = 40

    const progress = Math.round(1 * barLength * 1.0 / totalSteps);
    const percent = (1 * 100.0 / totalSteps).toFixed(2);

    const expected = { currentStep: 1, progress, percent, barLength }
    
    const response = progressBar(currentStep, totalSteps)

    expect(response).toMatchObject(expected)
  })
})