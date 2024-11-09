const id = document.getElementById("input-txt");

function captureEvent(event) {
    console.log("value is", event.target.value);

    fetch("https///")
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data)
        })
}


const debounceFunction = (fn, delay) => {

    let timeOut;
    return function (...args) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

id.addEventListener('input', debounceFunction(captureEvent, 2000))