

const btn = document.getElementById("btn");

function btnClick(e) {
    console.log("btn clicked");
}

const throttle = (func, delay) => {
    let lastCall = 0;

    return function (...args) {
        let now = new Date().getTime();

        if ((now - lastCall) < delay) {
            return
        }
        lastCall = now
        func(...args)
    }
}

btn.addEventListener("click", throttle(btnClick,1000))