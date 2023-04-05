const btn = document.querySelector('#change')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
btn.addEventListener('click', () => {
    let nums = []
    for (let i = 0; i<3; i++) {
        let num = Math.floor(Math.random()*255) + 1
        nums.push(num)
    }
    h1.innerText = `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`
    body.style.backgroundColor = `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`
})
