var layerImg = document.querySelector(".layer img");
var layer2 = document.getElementsByClassName("layer");
var escape = document.getElementsByClassName("escape")
var left = document.getElementsByClassName("left")
var right = document.getElementsByClassName("right")
var img = Array.from(document.querySelectorAll(".item img"));

// console.log(left[0]);
var currentIndex = 0;
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function (e) {
        currentIndex = img.indexOf(img[i]);
        console.log(img[i]);

        layer2[0].style.display = "flex";
        var getsrc = e.target.getAttribute("src");
        layerImg.src = getsrc;
    })
}
//// i have index global currentIndex
function slideRight() {
    currentIndex++;
    if (currentIndex === img.length) {
        currentIndex = 0;
    }
    console.log(currentIndex);
    layerImg.src = img[currentIndex].src;
}
function slideLeft() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = img.length - 1;
    }
    console.log(currentIndex);
    layerImg.src = img[currentIndex].src;
}
function slideEscape() {

    layer2[0].style.display = "none"
}
document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.code === "ArrowRight"){
        slideRight()
    }
    else if (e.code === "ArrowLeft"){
        slideLeft()

        }
    else if (e.code ==="Escape"){
        slideEscape() 

    }

})


right[0].addEventListener("click", slideRight)
escape[0].addEventListener("click", slideEscape)
left[0].addEventListener("click", slideLeft)






