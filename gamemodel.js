class GameModel {
  constructor(ctx) {
    this.ctx = ctx
    this.fallingPiece = null // piece
    this.grid = this.makeStartingGrid()
}

makeStartingGrid() {
  let grid = []
  for (var i = 0; i < ROWS; i++) {
    grid.push([])
    for  (var j = 0; j < COLS; j++) {
      grid[grid.length -1].push(0)
    }
  }
  return grid
}


}
