const startButton = document.querySelector("#start")
const timer = document.querySelector(".timer")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")

let seconds = 0
let minutes = 0
let hours = 0

function startStopWatch() {
    seconds++

    if (seconds > 59) {
        seconds = 0
        minutes++

        if (minutes > 59) {
            minutes = 0
            hours++
        }
    }

    let finalSeconds = seconds < 10 ? `0${seconds}` : seconds
    let finalMinutes = minutes < 10 ? `0${minutes}` : minutes
    let finalHours = hours < 10 ? `0${hours}` : hours

    timer.textContent = `${finalHours}:${finalMinutes}:${finalSeconds}`
}

let info = null

startButton.addEventListener("click", function () {
    // Logic to start the stopwatch
    // startStopWatch()
    info = setInterval(startStopWatch, 1000)
    console.log(info);
})

stopButton.addEventListener("click", function () {
    clearInterval(info)
})

resetButton.addEventListener("click", function () {
    timer.textContent = "00" + ":" + "00" + ":" + "00"
})