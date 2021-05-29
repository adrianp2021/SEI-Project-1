function init() {



 

 

  


  // const grid = document.querySelector('.grid') // get the grid element

  // const width = 50
  // const cellCount = width * width // number of cells in the grid
  // const cells = [] //empty array(when creating the divs, keep track of them)
  // let snakePosition = 25
  // let interval = 1
  // let remainingLives = 3
  // let score = 0
  // const snake = []
  // let direction = snakePosition + width

  // // * Make a grid
  // function createGrid() {
  //   for (let i = 0; i < cellCount; i++) { 
  //     const cell = document.createElement('div') 
  //     // console.log(cell)
  //     // cell.innerText = i
  //     cell.classList.add(`position-${i}`)

  //     grid.appendChild(cell) 
  //     cells.push(cell) 
  //   }
  // }
  // createGrid()  // this had not initially been invoked, hence the snake (below) could not be found in position 25


  // //ADD THE SNAKE
  // function addSnake(position) {
  //   // console.log(position)
  //   const cell = document.querySelector(`.position-${position}`)
  //   // console.log(cell)
  //   cell.classList.add('snake')
  // }
  // addSnake(snakePosition) 

  // // REMOVE THE SNAKE
  // function removeSnake(position) {
  //   const cell = document.querySelector(`.position-${position}`)
  //   cell.classList.remove('snake')
  // } 
  // removeSnake(snakePosition)

  // function handleKeyUp(event) {
  //   const key = event.keyCode
  //   console.log('POSITION BEFORE REDEFINING --->', snakePosition)

  //   if (key === 39 && snakePosition % width !== width - 1) { // right
  //     // snakePosition++ 
  //     interval = snakePosition - 1
  //   } else if (key === 37 && snakePosition % width !== 0) { // left
  //     // snakePosition-- 
  //     interval = snakePosition + 1
  //   } else if (key === 38 && snakePosition >= width) {  // up
  //     // snakePosition -= width 
  //     interval = snakePosition + 50
  //   } else if (key === 40 && snakePosition + width <= width * width - 1) { // down
  //     // snakePosition += width 
  //     interval = snakePosition - 50
  //   } else {
  //     console.log('INVALID KEY') 
  //   }
  //   console.log('POSITION AFTER REDEFINING --->', snakePosition)
  //   addSnake(snakePosition) 
  //   removeSnake(interval)
  // }

  // function moveSnake(){    
  //   const cell = document.querySelector(`.position-${snakePosition}`)
  //   cell.classList.add('snake')
  //   snakePosition = direction
  // }

  // // removeSnake(interval)

  // function run(){
  //   // snakePosition = snakePosition + width
  //   moveSnake(direction)
  // }



  
  



  // // // * Event listeners
  // document.addEventListener('keyup', handleKeyUp) 

   // // START BUTTON SOUND
    
  //   const startButton = document.querySelector('.start')
  // // console.log(startButton)
  //   const audio = document.querySelector('.game-sound')
  // // console.log(buttonSound)

  // function playSound(event) {
  //   console.log('clicked')
  //   audio.src = 'sounds/mixkit-unlock-game-notification-253.wav'
  //   console.log(audio)
  //   audio.play()
  // }
  // startButton.addEventListener('click', playSound)


// GAME MUSIC
  const onOff = document.querySelector('.on-off')
  const audio = document.querySelector('.game-music')
  function playMusic(event) {
    console.log('clicked')
    audio.src = 'sounds/yt1s.com - Happy and Cheerful Background Music  Casual Game Music 2 by WOW Sound.wav'
    console.log(audio)
    audio.play()
    // audio.pause() // needs more work
  }
  onOff.addEventListener('click', playMusic)
  window.onload = playMusic()





  const grid = document.querySelector('.grid') // get the grid element
  const width = 50
  const cellCount = width * width // number of cells in the grid
  const cells = [] //empty array(when creating the divs, keep track of them)
  let snakePosition = 25
  let interval = 1
  let remainingLives = 3
  let score = 0
  const snake = []
  let direction = 'down'


  // * Make a grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // console.log(cell)
      // cell.innerText = i
      cell.classList.add(`position-${i}`)
      grid.appendChild(cell)
      cells.push(cell)
    }
  }
  createGrid()  // this had not initially been invoked, hence the snake (below) could not be found in position 25

  //ADD THE SNAKE
  function addSnake(position) {
    // console.log(position)
    const cell = document.querySelector(`.position-${position}`)
    // console.log(cell)
    cell.classList.add('snake')
  }

  //ADD THE CARROT
  let carrotPosition = Math.floor(Math.random() * cells.length)
  console.log(carrotPosition)
  console.log(cells[carrotPosition])
  console.log(cells[carrotPosition].classList)

  addSnake(snakePosition)
  // REMOVE THE SNAKE
  function removeSnake(position) {
    const cell = document.querySelector(`.position-${position}`)
    cell.classList.remove('snake')
  }
  removeSnake(snakePosition)
  function handleKeyUp(event) {
    const key = event.keyCode
    console.log('POSITION BEFORE REDEFINING --->', snakePosition)
    if (key === 39 && snakePosition % width !== width - 1) { // right
      direction = 'right'
    } else if (key === 37 && snakePosition % width !== 0) { // left
      direction = 'left'
    } else if (key === 38 && snakePosition >= width) {  // up
      direction = 'up'
    } else if (key === 40 && snakePosition + width <= width * width - 1) { // down
      direction = 'down'
    } else {
      console.log('INVALID KEY')
    }
  }
  function run() {
    
  
    if (direction === 'right') {
      snakePosition++
    } else if (direction === 'left') {
      snakePosition--
    } else if (direction === 'down') {
      snakePosition += width
    } else {
      snakePosition -= width
    }

    if (snake.length >= 5) {
      const element = document.querySelector(`.position-${snakePosition}`)
      if (!element.classList.contains('.carrot')) {
        snake.shift()
      }
        
    }

    // addSnake(snakePosition)
    snake.push(snakePosition)
    console.log(snake)
    const cells = document.querySelectorAll('.snake')

    cells.forEach(function(element){
    
      element.classList.remove('snake')
    })
    snake.forEach(function(index) {
      const element = document.querySelector(`.position-${index}`)
      element.classList.add('snake')
    })
  }
  setInterval(run, 500)
  document.addEventListener('keyup', handleKeyUp)
}
window.addEventListener('DOMContentLoaded', init)

