const frombox = document.querySelector("#time_from");
const uptobox = document.querySelector("#time_upto");


const go = document.querySelector("#gobox");
go.addEventListener("click" ,()=>{
    const hourForStart = frombox.value.slice(0,2);
    const minForStart = frombox.value.slice(3,5);

    const time1 = new Date();
    time1.setHours(hourForStart);
    time1.setMinutes(minForStart);

    const hourForEnd = uptobox.value.slice(0, 2);
    const minForEnd = uptobox.value.slice(3, 5);

    const time2 = new Date();
    time2.setHours(hourForEnd);
    time2.setMinutes(minForEnd);

    const start = time1.getHours()*60 + time1.getMinutes();
    const end = time2.getHours() * 60 + time2.getMinutes();
    let duration = end - start;
    if(duration<0){
        duration+=1440;
    }
    let finalHour = String(Math.floor(duration / 60)).padStart(2, '0');
    let finalMin = String(duration % 60).padStart(2, '0');

    let text = document.querySelector(".timer");
    text.textContent = `${finalHour}:${finalMin}:00`;

    let totalSeconds = duration*60;

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    let timerInterval = setInterval(() => {
        totalSeconds -= 1;
        text.textContent = formatTime(totalSeconds);
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            text.textContent = "00:00:00";
        }
    }, 1000);
});
