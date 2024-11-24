let color = document.getElementById("SpinningCircleColor");
let spinningCircle = document.querySelector(".spinning-circle");
let rangeVolume = document.querySelector("#SpinningCircleColorRangeVolume");
let bouncingDot = document.querySelector(".bouncing-dot");
let pulsatingRing = document.querySelector(".pulsating-ring");

//color
let bouncingDotColor = document.querySelector("#bouncingDotColor");
let pulsatingRingColor = document.querySelector("#pulsatingRingColor");
//range
let bouncingDotRangeVolume = document.querySelector("#bouncingDotRangeVolume");
let pulsatingRingRangeVolume = document.querySelector("#pulsatingRingRangeVolume");
// console.log(bouncingDotColor);

// console.log(pulsatingRingColor);
//1
color.addEventListener("input", (d) => {
    console.log(d.target.value);
    // spinningCircle.setAttribute("style", ` border: 10px solid ${d.target.value};     border-top: 10px solid transparent;  `)
    spinningCircle.style.border = `10px solid ${d.target.value}`;
    spinningCircle.style.borderTop = "10px solid transparent";
})
rangeVolume.addEventListener('input', (d) => {
    console.log(d.target.value);
    spinningCircle.style.animationDuration = `${d.target.value}s`;
    // spinningCircle.setAttribute("style", `  animation-duration: ${d.target.value}s;`)
})
//2
bouncingDotColor.addEventListener("input", (d) => {
    console.log(d.target.value);
    // spinningCircle.setAttribute("style", ` border: 10px solid ${d.target.value};     border-top: 10px solid transparent;  `)
    bouncingDot.style.backgroundColor = ` ${d.target.value}`;
})
bouncingDotRangeVolume.addEventListener('input', (d) => {
    console.log(d.target.value);
    bouncingDot.style.animationDuration = `${d.target.value}s`;
    // spinningCircle.setAttribute("style", `  animation-duration: ${d.target.value}s;`)
})






pulsatingRingColor.addEventListener("input", (d) => {
    console.log(d.target.value);
    // spinningCircle.setAttribute("style", ` border: 10px solid ${d.target.value};     border-top: 10px solid transparent;  `)
    pulsatingRing.style.border = `10px solid ${d.target.value}`;
})
pulsatingRingRangeVolume.addEventListener('input', (d) => {
    console.log(d.target.value);
    pulsatingRing.style.animationDuration = `${d.target.value}s`;
    // spinningCircle.setAttribute("style", `  animation-duration: ${d.target.value}s;`)
})