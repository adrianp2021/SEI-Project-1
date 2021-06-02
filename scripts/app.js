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

  function arrowNoise(event) {
    console.log('clicked')
    audio.src = 'sounds/mixkit-fast-small-sweep-transition-166.wav'
    console.log(audio)
    audio.play()
  }
  arrowButton.addEventListener('click', arrowNoise)


  // // GAME MUSIC
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
  window.onload = playMusic() // start onload as a function (true); if click the button start, if again clicked stop it




  const grid = document.querySelector('.grid') // get the grid element
  const width = 50
  const cellCount = width * width // number of cells in the grid
  const cells = [] //empty array(when creating the divs, keep track of them)
  let snakePosition = 25
  const livesDisplay = document.querySelector('#lives-display')
  let remainingLives = 3
  const scoreDisplay = document.querySelector('#score-display')
  let score = 0
  const snake = []
  let direction = 'down'
  let speed = 150
  const wall = []

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
  createGrid()

  // SPEED
  function increaseSpeed() {
    speed = speed + 500
  }

  //ADD THE SNAKE
  function addSnake(position) {
    // console.log(position)
    const cell = document.querySelector(`.position-${position}`)
    console.log(cell)
    cell.classList.add('snake')
    // cell.classList.add('carrot')
  }
  addSnake(snakePosition)

  // NEW CARROT - new array cu toate pozitiile din grid, in afara de cele care sunt border
  function newCarrot() {
    const carrotPositions = []     // trebuie sa scot din cells, elementele din wall array - needs all the divs which are NOT the border
    for(let i = 51; i < 2448; i++)
    const carrotPosition = cells[carrotPositions[Math.floor(Math.random() * carrotPositions.length)]] // gives a random number 
    cells[carrotPosition].classList.add('carrot')
    // ADD THE CARROT
    // let carrotIndex = 0
  }
  newCarrot()

  // REMOVE THE SNAKE
  function removeSnake(position) {
    const cell = document.querySelector(`.position-${position}`)
    cell.classList.remove('snake')
  }
  removeSnake(snakePosition)


  // SNAKE DIRECTION
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

  // EATING CARROT
  function checkIfContainsCarrot(element) {
    if (element.classList.contains('carrot')) {
      element.classList.remove('carrot')
      score += 100
      scoreDisplay.innerText = score
      newCarrot()
      increaseSpeed()
    } else {
      if (snake.length >= 5) {
        snake.shift()
      }
    }
  }

  // CREATE WALL

  function setWall() {
    for (let i = 0; i < 2499; i += 50) {   // create right wall
      wall.push(i)
    }
    for (let i = 2499; i > 2499 - 50; i--) {
      console.log(i)                        // create bottom wall
      wall.push(i)
    }
    for (let i = 49; i < 2499; i += 50) {   // create left wall
      wall.push(i)
    }
    for (let i = 0; i < 50; i++) {     // create top wall
      wall.push(i)
    }

  }
  setWall()

  wall.forEach(element => {
    const wallItem = document.querySelector(`.position-${element}`)

    wallItem.classList.add('border')
  })

  function snakeDies(interval) {
    clearInterval(interval)
    resetGame()
  }

  function init() {
    let runInterval = setInterval(() => {
      if (direction === 'right') {
        snakePosition++
      } else if (direction === 'left') {
        snakePosition--
      } else if (direction === 'down') {
        snakePosition += width
      } else {
        snakePosition -= width // up
      }

      const element = document.querySelector(`.position-${snakePosition}`)
      checkIfContainsCarrot(element)

      snake.push(snakePosition)

      const snakeBody = document.querySelectorAll('.snake')
      snakeBody.forEach(function (el) {
        el.classList.remove('snake')
      })
      snake.forEach(function (index) {
        const element = document.querySelector(`.position-${index}`)
        element.classList.add('snake')
      })

      if (element.classList.contains('border')) {
        snakeDies(runInterval)
      }
    }, speed)
    document.addEventListener('keyup', handleKeyUp)
  }

  const restartButton = document.querySelector('.restart')
  // RESET GAME
  function startGame() {
    remainingLives--
    livesDisplay.innerText = remainingLives
    snakePosition = 75
    direction = 'down'
    addSnake(snakePosition)
    init()
    score = 0
  }
  startGame()

  restartButton.addEventListener('click', startGame)
  // 


}
window.addEventListener('DOMContentLoaded', init)

