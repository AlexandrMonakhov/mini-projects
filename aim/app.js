const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

const COLORS = ['#e74c3c', '#e67e22', '#2ecc71', '#1c9881', '#b5ff529e', '#ca21779e', '#9921caa6', '#2193ca']

let time = 0
let score = 0

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let currentTime = --time
    setTime(currentTime)
  }
}

function setTime(value) {
  timeEl.textContent = `00:${value < 10 ? `0${value}` : value}`
}

function createRandomCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)

  const { width, height } = board.getBoundingClientRect()

  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const color = COLORS[getRandomNumber(0, COLORS.length)]
  circle.classList.add('circle')

  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = `linear-gradient(90deg, ${color} 0%, ${color} 47%, ${color} 100%)`

  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

startBtn.addEventListener('click', event => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.dataset.time)
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})