const board = document.querySelector('#board')
const COLORS = ['#e74c3c', '#e67e22', '#2ecc71', '#1c9881', '#b5ff529e', '#ca21779e', '#9921caa6', '#2193ca']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = ''
  element.style.boxShadow = ''
}

function getRandomColor() {
  const index = Math.floor(Math.random() * COLORS.length)
  return COLORS[index]
}