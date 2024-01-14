const thisYear = new Date().getFullYear()
const startTimeOfThisYear = Date.UTC(thisYear, 0, 1, 0, 0, 0)
const endTimeOfThisYear = Date.UTC(thisYear, 11, 31, 23, 59, 59)
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarCapacity = 30
const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)

function generateProgressBar() {
    const progressBar = []
    for (let i = 0; i < progressBarCapacity; i++) {
        if (i < passedProgressBarIndex) {
            progressBar.push('█')
        } else {
            progressBar.push('▁')
        }
    }
    return `${progressBar.join('')}`
}

const readme = `\
<p align="center">
⏳Year Progress (${(progressOfThisYear * 100).toFixed(2)} %)<br>
${generateProgressBar()} <br>
<sub>Updated: ${new Date().toUTCString()}</sub>
</p>
`

console.log(readme)
