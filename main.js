var milDiv = document.querySelector('.mil');
var secDiv = document.querySelector('.sec');
var minDiv = document.querySelector('.min');
var btn = document.querySelector('button');
var ms = 0;
var s = 0;
var m = 0;
var loop;
btn.addEventListener('click',stopWatch);
btn.addEventListener('dblclick',resetStopWatch);
function stopWatch() {

    if (this.innerHTML == "Start"){

        this.innerHTML = "Pause";
         loop = setInterval(function () {
            ms++;
            if(ms === 100){
                ms = 0;
                s++;
                (s<10) ? s = "0"+s : s;
                if (s === 60){
                    s = 0;
                    m++;

                    (m<10) ? m = "0"+m : m;
                    minDiv.innerHTML = m;
                }

                secDiv.innerHTML = s;
            }
            milDiv.innerHTML = ms;

        },1)
    }else{
        clearInterval(loop);
        this.innerHTML = "Start";
    }

}
function resetStopWatch() {
    ms = 0;
    s = 0;
    m = 0;
    milDiv.innerHTML = "0"+ms;
    secDiv.innerHTML = "0"+s;
    minDiv.innerHTML = "0"+m;
    clearInterval(loop);
    this.innerHTML = "Start";
}