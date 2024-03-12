
setTimeout(() => {
    let maxcount = document.querySelector("#project").innerHTML
    let count = 0;
    let id = setInterval(() => {
        count = count + 1;
        document.querySelector("#project").innerHTML = count;
        if (count == maxcount) {
            clearInterval(id)
        }
    }, 100)
}, 2000);

setTimeout(() => {
    let maxcount = document.querySelector("#task").innerHTML
    let count = 0;
    let id = setInterval(() => {
        count = count + 1;
        document.querySelector("#task").innerHTML = count;
        if (count == maxcount) {
            clearInterval(id)
        }
    },100)
},4000);

setTimeout(() => {
    let maxcount = document.querySelector("#client").innerHTML
    let count = 0;
    let id = setInterval(() => {
        count = count + 1;
        document.querySelector("#client").innerHTML = count;
        if (count == maxcount) {
            clearInterval(id)
        }
    },50)
},6000);


setTimeout(() => {
    let maxcount = document.querySelector("#summary").innerHTML
    let count = 0;
    let id = setInterval(() => {
        count = count + 1;
        document.querySelector("#summary").innerHTML = count;
        if (count == maxcount) {
            clearInterval(id)
        }
    },50)
},8000);