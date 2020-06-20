let documentBody = document.querySelector("body")


let mainElement = document.createElement("main");
mainElement.classList.add("main")
documentBody.append(mainElement)
mainElement.append("Main")


let button = document.createElement("Button")
button.append("Button")
documentBody.append(button)

let image1Div = document.createElement("img")
image1Div.classList.add("image")
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

let texttype = document.createElement("input")
documentBody.append(texttype)

let newbutton = document.createElement("button")
newbutton.append("New Button")
documentBody.append(newbutton)

newbutton.addEventListener("click", function () {
    let texttyped = texttype.value
    console.log(texttyped)
    // let x = image1Div
    // let y = image2Div
    //let r = mainElement

    console.log(image1Div)
    if (texttyped = image1Div) {
        img.classList.remove(".image")
    }
    //else if (texttyped = image2Div) {
    //  image2Div.remove()
    //}
    //else {
    //  mainElement.remove()
    //}


})