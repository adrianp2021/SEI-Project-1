function initGame() {

  const grid = document.querySelector('.grid') // get the grid element
  const width = 50
  const cellCount = width * width // number of cells in the grid
  const cells = [] //empty array(when creating the divs, keep track of them)  
  const livesDisplay = document.querySelector('#lives-display')
  const scoreDisplay = document.querySelector('#score-display')
  const wall = []
  // const restartButton = document.querySelector('.restart')
  const startButton = document.querySelector('.on-off')


  let snake = []
  let direction = 'down'
  let speed = 150
  let score = 0
  let snakePosition = 125
  let remainingLives = 3
  let soundActive = true


  // -------  GAME MUSIC  -------
  function playSound() {
    const gameSound = document.querySelector('.game-sound')
    gameSound.src = 'sounds/yt1s.com - Happy and Cheerful Background Music  Casual Game Music 2 by WOW Sound.wav'

    if (soundActive) {
      gameSound.play()
    } else {
      gameSound.pause()
    }
    soundActive = !soundActive
  }
  startButton.addEventListener('click', playSound)


  // -------  ARROW SOUNDS  -------
  const arrowButton = document.querySelector('.mega')

  function arrowNoise() {
    const audio = document.querySelector('.arrow-sound')
    audio.src = 'sounds/mixkit-retro-game-notification-212.wav'
    audio.play()
  }
  arrowButton.addEventListener('click', arrowNoise)


  // -------  GAME OVER SOUND -------
  function gameOverSound() {
    const gameOver = document.querySelector('.game-over')
    gameOver.play()
  }


  // -------  SNAKE EATS CARROT SOUND  -------
  function snakeEatsCarrot() {
    const carrotEaten = document.querySelector('.carrot-eaten')
    carrotEaten.play()
  }


  // -------  MAKE A GRID  -------
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.classList.add(`position-${i}`)
      grid.appendChild(cell)
      cells.push(cell)
    }
  }


  // -------  CREATE WALL -------
  function setWall() {
    for (let i = 0; i < 2499; i += 50) {   // create right wall
      wall.push(i)
    }
    for (let i = 2499; i > 2499 - 50; i--) {   // create bottom wall                      
      wall.push(i)
    }
    for (let i = 49; i < 2499; i += 50) {   // create left wall
      wall.push(i)
    }
    for (let i = 0; i < 50; i++) {     // create top wall
      wall.push(i)
    }
  }


  // -------  SPEED  -------
  function increaseSpeed() {
    if (speed <= 50) {
      speed -= 50
    }
  }


  // -------  SET SCORE  -------
  function setScore(newScore) {
    if (newScore !== 0) {
      score += 100
    }
    scoreDisplay.innerText = score
  }


  // -------  ADD THE SNAKE  -------
  function setSnakeOnStartPosition() {
    const cell = document.querySelector(`.position-${snakePosition}`)
    console.log('hello there', cell)
    cell.classList.add('snake')

  }


  // -------  NEW CARROT  -------- 
  function newCarrot() {
    const carrotPositions = cells.filter(item => {
      return !item.classList.contains('border')
    })
    const carrotPosition = carrotPositions[Math.floor(Math.random() * carrotPositions.length)].classList.value // gives a random number 
    document.querySelector(`.${carrotPosition}`).classList.add('carrot')
  }


  // -------  EATING CARROT  -------
  function checkIfContainsCarrot(element) {
    if (element.classList.contains('carrot')) {
      element.classList.remove('carrot')
      snakeEatsCarrot()
      setScore()
      newCarrot()
      increaseSpeed()
    } else {
      if (snake.length >= 5) {
        snake.shift()
      }
    }
  }


  // -------  SNAKE DIES  -------
  function snakeDies(interval) {
    if (remainingLives === 1) {
      clearInterval(interval)
      score = 0
      setScore(score)
      gameOverSound()
    } else {
      clearInterval(interval)
      resetGameSettings()
    }
  }


  // -------  GAME ACTION  -------
  function init() {
    const runInterval = setInterval(() => {
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
        const el = document.querySelector(`.position-${index}`)
        el.classList.add('snake')
      })

      if (element.classList.contains('border')) {
        snakeDies(runInterval)
      }
    }, speed)
    document.addEventListener('keyup', handleKeyUp)
  }


  // -------  SNAKE DIRECTION  -------
  function handleKeyUp(event) {
    const key = event.keyCode
    if (key === 39) {                         // right
      direction = 'right'
      arrowNoise()
    } else if (key === 37) {                  // left
      direction = 'left'
      arrowNoise()
    } else if (key === 38) {                  // up
      direction = 'up'
      arrowNoise()
    } else if (key === 40) {                  // down
      direction = 'down'
      arrowNoise()
    } else if (key === 13) {
      init()
    } else {
      console.log('INVALID KEY')
    }
  }


  // -------  NEW GAME  -------
  function resetGameSettings() {
    snake = []
    remainingLives--
    livesDisplay.innerText = remainingLives
    snakePosition = 75
    direction = 'down'
    setSnakeOnStartPosition(snakePosition)
  }


  // ------------------   CALLING FUNCTIONS   ------------------
  createGrid()
  setWall()


  // SET GRID BORDER
  wall.forEach(element => {
    const wallItem = document.querySelector(`.position-${element}`)
    wallItem.classList.add('border')
  })

  setSnakeOnStartPosition()
  newCarrot()
  init()

  // restartButton.addEventListener('click', startGame)
}
window.addEventListener('DOMContentLoaded', initGame)

