// GameSetup

let canvas = document.getElementById("game-canvas")
let scoreboard = document.getElementById("scoreboard")

//get CanvasObject
let ctx = canvas.getContext("2d")
//scale CanvasObject
ctx.scale(BLOCK_SIDE_LENGTH, BLOCK_SIDE_LENGTH)
let model = new GameModel(ctx)

let score = 0

setInterval(() => {
  newGameState()
}, GAME_CLOCK);

//check current GameState for send Lines
let newGameState = () => {
  fullSend()
  if (model.fallingPiece === null) {
      const rand = Math.round(Math.random() * 6) + 1
      const newPiece = new Piece(SHAPES[rand], ctx)
      model.fallingPiece = newPiece
      model.moveDown()
      } else {
        model.moveDown()
  }
}

//check for fullSendLine
const fullSend = () => {
  const allFilled = (row) => {
    for (let x of row) {
        if (x === 0) {
            return false
        }
    }
    return true
  }

  //check Board row by row and remove fullsendLines
  for (let i = 0; i < model.grid.length; i++) {
    if (allFilled(model.grid[i])) {
        score += SCORE_WORTH
        model.grid.splice(i, 1)
        modelgrid.unshift([0,0,0,0,0,0,0,0,0,0])
    }
 }

 scoreboard.innerHTML = "Score: " + String(score)
}
