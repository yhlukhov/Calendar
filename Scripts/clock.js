//Digital Calendar clock
function showCalendarTime(element) {
    let time = new Date();
    let h = (time.getUTCHours()+3)%24;
    let m = time.getUTCMinutes();
    let s = time.getUTCSeconds();
    m = formatTime(m);
    s = formatTime(s);
    element.innerHTML = `${h}:${m}:${s}`;
}
//Digital Local clock
function showLocalTime(element) {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    m = formatTime(m);
    s = formatTime(s);
    element.innerHTML = `${h}:${m}:${s}`;
}

function formatTime(t) {
    if (t<10) t = "0" + t;
    return t;
}

//Механічний годинник - місцевий час
function clockLocal(){
    const hh = document.querySelector('.hoursLocal')
    const mm = document.querySelector('.minsLocal')
    const ss = document.querySelector('.secsLocal')
    let date = new Date()
    let currTime = Date.now()
    let ssDegDiff // will be changing
    let mmDegDiff // will be changing
    let hhDegDiff // will be changing
    const ssDegBegin = date.getSeconds()*6 + date.getMilliseconds()/1000*6
    const mmDegBegin = date.getMinutes()*6 + date.getSeconds()/60*6
    const hhDegBegin = date.getHours()%12*30 + date.getMinutes()/60*30
    setInterval(()=>{
        let newTime = Date.now()
        let timeDiff = (newTime-currTime)/1000
        ssDegDiff = Math.round(ssDegBegin + timeDiff*6)
        mmDegDiff = (mmDegBegin + timeDiff/60*6).toFixed(1)
        hhDegDiff = (hhDegBegin + timeDiff/60/60*30).toFixed(2)
        ss.style.transform = `rotate(${ssDegDiff}deg)`
        mm.style.transform = `rotate(${mmDegDiff}deg)`
        hh.style.transform = `rotate(${hhDegDiff}deg)`
    }, 1000)
}
//Механічний годинник - календарний час
function clockCalendar(){
    const hh = document.querySelector('.hoursCalendar')
    const mm = document.querySelector('.minsCalendar')
    const ss = document.querySelector('.secsCalendar')
    let date = new Date()
    //UTC+3:
    let utcMinutes = date.getUTCMinutes()
    let utcHours = (date.getUTCHours()+3)%12
    let currTime = Date.now()
    let ssDegDiff // will be changing
    let mmDegDiff // will be changing
    let hhDegDiff // will be changing
    const ssDegBegin = date.getSeconds()*6 + date.getMilliseconds()/1000*6
    const mmDegBegin = utcMinutes*6 + date.getSeconds()/60*6
    const hhDegBegin = utcHours*30 + utcMinutes/60*30
    setInterval(()=>{
        let newTime = Date.now()
        let timeDiff = (newTime-currTime)/1000
        ssDegDiff = ssDegBegin + timeDiff*6
        mmDegDiff = mmDegBegin + timeDiff/60*6
        hhDegDiff = hhDegBegin + timeDiff/60/60*30
        ss.style.transform = `rotate(${ssDegDiff}deg)`
        mm.style.transform = `rotate(${mmDegDiff}deg)`
        hh.style.transform = `rotate(${hhDegDiff}deg)`
    }, 1000)
}
//Запустити механічні годинники
clockLocal()
clockCalendar()
//Запустити цифрові годинники
setInterval(()=>{
    showCalendarTime(document.querySelector('.timeCalendar'))
    showLocalTime(document.querySelector('.timeLocal'))
},1000)