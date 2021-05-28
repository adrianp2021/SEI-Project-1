function init () {


  const grid = document.querySelector('.grid') // get the grid element
  
  const width = 50
  const cellCount = width * width 
  const cells = [] 
  let snakePosition = 25
  let interval = 1
  const startButton = document.querySelector('#start-button')
  // console.log(startButton)
  const audio = document.querySelector('#game-sound')
  // console.log(buttonSound)

  function playSound(event) {
    console.log('clicked')
    audio.src = 'sounds/mixkit-unlock-game-notification-253.wav'
    console.log(audio)
    audio.play()
  }

  startButton.addEventListener('click', playSound)

  // * Make a grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) { 
      const cell = document.createElement('div') 
      // console.log(cell)
      
      cell.classList.add(`position-${i}`)
    
      grid.appendChild(cell) 
      cells.push(cell) 
    }
  }

  
  function addSnake(position) {
    const cell = document.querySelector(`.position-${position}`)
    cell.classList.add('snake')
  }

  function removeSnake(position) {
    const cell = document.querySelector(`.position-${position}`)
    cell.classList.remove('snake')
  } 

  function handleKeyUp(event) {
    const key = event.keyCode
    console.log('POSITION BEFORE REDEFINING --->', snakePosition)
    
    if (key === 39 && snakePosition % width !== width - 1) { // right
      // snakePosition++ 
      interval = snakePosition - 1
    } else if (key === 37 && snakePosition % width !== 0) { // left
      // snakePosition-- 
      interval = snakePosition + 1
    } else if (key === 38 && snakePosition >= width) {  // up
      // snakePosition -= width 
      interval = snakePosition + 50
    } else if (key === 40 && snakePosition + width <= width * width - 1) { // down
      // snakePosition += width 
      interval = snakePosition - 50
    } else {
      console.log('INVALID KEY') 
    }
    console.log('POSITION AFTER REDEFINING --->', snakePosition)
    addSnake(snakePosition) 
    removeSnake(interval)
  }

  function moveSnake() {
    snakePosition = snakePosition + 50
    addSnake(snakePosition) 
    interval = interval - 50
    removeSnake(interval)

    



  // * Event listeners
  document.addEventListener('keyup', handleKeyUp) 

  createGrid()
  addSnake(snakePosition) 
    
  setInterval(moveSnake, 500)




}






window.addEventListener('DOMContentLoaded', init) 