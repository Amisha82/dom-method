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
        let linkDiv = document.createElement("div")
        a.append("link")
        a.href = "URL"
        linkDiv.append(a)
        return documentBody.append(linkDiv)
    }

    function paraEle(b) {
        b = document.createElement("p")
        let paraDiv = document.createElement("div")
        b.append("p")
        paraDiv.append(b)

        return documentBody.append(paraDiv)
    }
    function buttonElement(c) {
        c = document.createElement("button")
        let buttonDiv = document.createElement("div")
        buttonDiv.append(c)
        c.append("click here")
        console.log(c)

        return documentBody.append(buttonDiv)
    }
})


