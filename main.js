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
    let texttyped = '.' + texttype.value
    console.log(texttyped)

    let element = document.querySelectorAll(texttyped)
    for (index = 0; index < element.length; index++) {
        remove(element[index])
    }

})


function remove(a) {
    a.remove()
}
document.write("<br>");
document.write("<br>");
let textAdd = document.createElement("input")
documentBody.append(textAdd)
let addInputbutton = document.createElement("button")
addInputbutton.append("Add Element")
documentBody.append(addInputbutton)

addInputbutton.addEventListener("click", function () {
    let addInput = textAdd.value;
    console.log(addInput)
    let link;
    let p;
    let button;
    let ad1Element = link;
    let ad2Element = p;
    let ad3Element = button;
    let array = ["link", "p", "button"]

    if (addInput === "link") {

        linkEle(array[0])
    }
    else if (addInput === "p") {
        paraEle(array[1])

    }

    else if (addInput === "button") {
        buttonElement(array[2])
    }

    function linkEle(a) {
        a = document.createElement("a")
        a.append("link")
        a.href = "URL"
        return documentBody.append(a)
    }

    function paraEle(b) {
        b = document.createElement("p")
        b.append("p")

        return documentBody.append(b)
    }
    function buttonElement(c) {
        c = document.createElement("button")
        c.append("click here")
        console.log(c)

        return documentBody.append(c)
    }
})


