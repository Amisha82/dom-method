let documentBody = document.querySelector("body")


let mainElement = document.createElement("main");
mainElement.classList.add("main")
documentBody.append(mainElement)
mainElement.append("Main")

document.write("<br>");
let button = document.createElement("Button")
button.append("Button")
documentBody.append(button)


let image1Div = document.createElement("img")
image1Div.classList.add("image")

image1Div.append("Image")
image1Div.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1WnDM9mJABnZceANC7CUusrMeeYMWO372rHeNru-HLKyb0Vjx&usqp=CAU"
mainElement.append(image1Div)


let image2Div = document.createElement("a")
image2Div.classList.add("link")
image2Div.append("Link")
image2Div.href = 'https://news.yahoo.com/in-pictures-stunning-landscape-photos-from-the-across-the-world-compete-in-agora-photo-contest-160050943.html'
mainElement.append(image2Div)

button.addEventListener("click", function () {
    mainElement.remove()

})
document.write("<br>");
document.write("<br>");
let texttype = document.createElement("input")
documentBody.append(texttype)

let newbutton = document.createElement("button")
newbutton.append("Remove Element")
documentBody.append(newbutton)

newbutton.addEventListener("click", function () {
    let texttyped = texttype.value
    console.log(texttyped)
    // document.querySelectorAll('.' + texttyped).forEach(function (a) {
    //   a.remove()
    //})
    let mainElement1 = documentBody.getElementsByClassName("main")
    let image = documentBody.getElementsByClassName("image")
    console.log(image)
    let link1 = documentBody.getElementsByClassName("link")
    let querySelectorAll = [mainElement1, image, link1]
    for (index = 0; index < querySelectorAll.length; index++) {
        let currSelector = querySelectorAll[index]
        console.log(currSelector);
        if (currSelector === texttyped) {
            texttyped.remove()

        }
    }

})
document.write("<br>");
document.write("<br>");
let textAdd = document.createElement("input")
documentBody.append(textAdd)

let addInputbutton = document.createElement("button")
addInputbutton.append("Add Element")
documentBody.append(addInputbutton)