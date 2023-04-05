// Random int between 1-255
let num = Math.floor(Math.random()*255)

// Random Color
const randColor = () => {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}
