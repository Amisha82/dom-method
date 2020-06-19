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