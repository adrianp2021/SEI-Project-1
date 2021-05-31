function init() {

    
  const startButton = document.querySelector('.start')
  // console.log(startButton)
  const audio = document.querySelector('.game-sound')
  // console.log(buttonSound)

  function playSound(event) {
    console.log('clicked')
    audio.src = 'sounds/mixkit-unlock-game-notification-253.wav'
    console.log(audio)
    audio.play()
  }
  startButton.addEventListener('click', playSound)

  // Arrow sounds
  const arrowButton = document.querySelector('.mega')
  const arrowsSounds = document.querySelector('.arrow-sound')

  function arrowNoise(event){
    console.log('clicked')
    audio.src = 'sounds/mixkit-fast-small-sweep-transition-166.wav'
    console.log(audio)
    audio.play()
  }
  arrowButton.addEventListener('click', arrowNoise)


  // GAME MUSIC
  const onOff = document.querySelector('.on-off')
  const gameMusic = document.querySelector('.game-music')
  function playMusic(event) {
    console.log('clicked')
    audio.src = 'sounds/yt1s.com - Happy and Cheerful Background Music  Casual Game Music 2 by WOW Sound.wav'
    console.log(audio)
    audio.play()
  }
  function pauseMusic(event) {
    audio.pause()
  }

  onOff.addEventListener('click', playMusic)
  window.onload = playMusic()

  
  // const audio = document.querySelector('audio')
  // const playPause = document.querySelector('.on-off')
  // const count = 0

  // function playPause(event) {
  //   if(count == 0){
  //     count = 1;
  //     audio.play();
  //   }else{
  //     count = 0;
  //     audio.pause()
  //   }
  // }
  // playPause.addEventListener('click', playPause)



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


  // * MAKE A GRID
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
    // cell.classList.add('carrot')
  }
  addSnake(snakePosition)

  // ADD THE CARROT
  // let carrotIndex = 0
  let carrotPosition = Math.floor(Math.random() * cells.length)

  function newCarrot(position){
    const cell = document.querySelector(`.position-${position}`)
    cells[carrotPosition].classList.add('carrot')
  }
  newCarrot(carrotPosition)

  
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

  
  const tail = snake.pop()
  cells[tail].classList.remove('snake')
  snake.unshift(snake)
  function snakeEatsCarrot() {
  if(snake.length >= 5)
    const element = document.querySelector(`.position-${snakePosition}`)
  if (element.classList.contains('.carrot')){
    snake.push(width)
  }
  }
}
snakeEatsCarrot()

// (snake.classList.contains('carrot')){
//   snake.classList.remove('carrot')
//   snake.classList.add('snake')
//   snake.push(tail)

  // let carrot = document.querySelector('.carrot')
  
    // if (snake.classList.contains('carrot')) {
    //   snake.classList.remove('carrot')
    //   snake.classList.add('snake')
    // }
    // snakeEatsCarrot()


    // cells[carrotPosition].classList.remove('carrot')
    // carrotPosition = Math.floor(Math.random() * cells.length)
    // cells[carrotPosition].classList.add('carrot')


    // cells[snake].classList.remove('snake')
    // snake.unshift(snake + direction)
    // if (cells[snake].classList.contains('carrot'))
    //   cells[snake].classList.remove('carrot')
    // cells[tail].classList.add('snake')
    // snake.push(tail)
  }




  
  // console.log(carrotPosition)
  // console.log(grid[carrotPosition])
  // console.log(grid[carrotPosition].classList.add('.carrot'))
  
  // function snakeHitting() {
  //   if (
  //     (snakePosition[0]) + width >= (width * width) && direction === width) ||
  //     (snakePosition[0]) % width === width - 1 && direction === 1) ||
  //     (snakePosition[0]) % width === 0 && direction === -1)
  //     (snakePosition[0] - width < 0 && direction === -width) ||
  //     cells[snakePosition[0] + direction].classList.contains.('snake')
  //    } else  {
  //       return clearInterval(interval)
  //     }
  //     const tail = snakePosition.pop()
  //     cells[tail].classList

}
window.addEventListener('DOMContentLoaded', init)