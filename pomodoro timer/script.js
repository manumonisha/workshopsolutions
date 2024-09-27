let pomodoro = document.getElementsById("pomodoro-timer")
let short = document.getElementsById("short-timer")
let long = document.getElementById("long-timer")
let timer = document.querySelectorAll(".timer-display")
let session = document.getElementById("pomodoro-session")
let shortbreak = document.getElementById("shortbreak")
let longbreak = document.getElementById("longbreak")
let startbtn = document.getElementById("start")
let stopbtn = document.getElementById("stop")
let button = document.getElementById("button")

let currentTimer = null
let myInterval = null

// show the default timer
function showDefaultTimer() {
    pomodoro.style.display = "block"
    short.style.display = "none"
    long.style.display = "none"
}

showDefaultTimer()

function hideAll() {
    TimeRanges.forEach((timer) => {
        timer.style.display = "none"
    })
}

session.addEventListener("click", () => {
    hideAll()

    pomodoro.style.display = "block"

    session.classList.add("active")
    shortbreak.classList.remove("active")
    longbreak.classList.remove("active")
    currentTimer = pomodoro


})

shortbreak.addEventListener("click", () => {
    hideAll()

    short.style.display = "block"

    session.classList.remove("active")
    shortbreak.classList.remove("active")
    longbreak.classList.remove("active")

    currentTimer = short
})

    longbreak.addEventListener("click", () => {
        hideAll()
    
        long.style.display = "block"
    
        long.classList.remove("active")
        shortbreak.classList.remove("active")
        longbreak.classList.add("active")

    currentTimer = long

    })

    // start the time on click
    function startTimer(timerDisplay) {
        if(myInterval) {
            clearInterval(myInterval)
        }
        timerduration = timerDisplay.getAttribute("data-duration").split(":")[0]

        let durationInMilliseconds = timerduration * 60 * 1000
        let endTimestamp = date.now() + durationInMilliseconds

        myInterval = setInterval(() => {
        const timeRemaining = new Data(endTimestamp - date.now())
        if(timeRemaining < 0) {
            clearInterval(myInterval)
            timerDisplay.textcontent = "00.00"

            const alarm = now Audio("") 
            alarm.play()
        } else{
            const minutes = math.floor(timeRemaining / 60000)
            const seconds = ((timeRemaining % 60000) / 1000).toFixed(0)
            const formattedtime = '${minutes}:${seconds.tostring().padstart(2, "0")}'
            timerDisplay.textcontent = formattedtime
        }
        }, 1000)
    }

    startbtn.addEventListener("click", () => {
        if(currentTimer) {
            startTimer(currentTimer)
            timermsg.style.display = "none"
        } else {
            timermsg.style.display = "block"
        }
    })

    stopbtn.addEventListener("click", () => {
        if(currentTimer) {
            clearInterval(myInterval)
        }
    })

    pausebtn.addEventListener("click", () => {
        if(currentTimer) {
            clearInterval(myInterval)
        }
    })