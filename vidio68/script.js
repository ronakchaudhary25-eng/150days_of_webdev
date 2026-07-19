console.log("heyyy! man i'm back!!!")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[0].style.backgroundColor = "blue"

document.getElementById("redbox").style.backgroundColor = "red"
// sirf id wale me getElement... ata hai baki me elements 

// document.querySelector(".box").style.backgroundColor = "blue"
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach((e, index) => {
    if (index >= 2 && index <= 5) {
        e.style.backgroundColor = "green";
    }
});