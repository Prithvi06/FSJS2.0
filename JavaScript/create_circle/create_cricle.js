function randomColor(){
    let list = '0123456789ABCDEF'
    let color = "#"
    for (let i=0; i<6; i++){
        color = color + list[Math.floor(Math.random()*16)]
    }
    return color
}


const body = document.querySelector("body")
console.log(body)
document.addEventListener("click", (e) => {
    let circle = document.createElement("div")
    let color = randomColor()
    console.log(color)
    let x = e.clientX - 20
    let y = e.clientY - 20 
    console.log(x,y)
    circle.style.backgroundColor = color
    circle.style.top = y+"px"
    circle.style.left = x+"px"
    body.appendChild(circle)
})