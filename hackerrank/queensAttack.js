/**
 * @function queensAttack
 * 
 * @param {number} n 
 * @description The number of rows and columns on the board
 * 
 * @param {number} k 
 * @description The number of obstacles on the board
 * 
 * @param {number} r_q 
 * @description The row number of the queen
 * 
 * @param {number} c_q 
 * @description The column number of the queen
 * 
 * @param {array[]} obstacles 
 * @description A two dimensional array where each element is an array of 2 integers
 * that are the row and column number of an obstacle.
 * 
 * @description Given the above paramters, return the number of squares the queens
 * can attack on a n * n chessboard.
 * 
 * 
 */

function Chess() {
    this.board = []
}

Chess.prototype.makeBoard = function (n) {
    let start = n
    while (start) {
        let row = []
        let len = n
        while (len) {
            row.push('')
            len--
        }
        this.board.push(row)
        start--
    }
    return this.board
}

Chess.prototype.placeQueen = function (r, c) {
    this.board[this.board.length - r][c - 1] = 'QUEEN'
    this.queenSpot = [this.board.length - r, c - 1]
    this.moves = 0
    return this
}

Chess.prototype.placeObstacles = function (num, obs) {
    while (obs.length) {
        this.board[this.board.length - obs[0][0]][obs[0][1] - 1] = 'X'
        obs.splice(0, 1)
    }
    return this
}

Chess.prototype.countHorizontal = function (n) {
    let queen = this.queenSpot[1]

    for (let left = queen - 1; left >= 0; left--) {
        if(this.board[this.queenSpot[0]] && queen !== -1){
            if (this.board[this.queenSpot[0]][left]) {
                break;
            } else {
                this.moves++
            }
        }
    }

    for (let right = queen + 1; right < n; right++) {
        if(this.board[this.queenSpot[0]]){
            if (this.board[this.queenSpot[0]][right]) {
                break;
            } else {
                this.moves++
            }
        }
    }
    return this
}

Chess.prototype.countVertical = function (n) {
    let queen = this.queenSpot[0]

    for (let up = queen - 1; up >= 0; up--) {
        if(this.board[up] && queen !== -1){
            if (this.board[up][this.queenSpot[1]]) {
                break;
            } else {
                this.moves++
            }
        }
    }

    for (let down = queen + 1; down < n; down++) {
        if(this.board[down]){
            if (this.board[down][this.queenSpot[1]]) {
                break;
            } else {
                this.moves++
            }
        }
    }
}

Chess.prototype.countDiagonal = function (n) {
    /** Handle down left */
    let a = this.queenSpot[0] + 1
    let b = this.queenSpot[1] - 1
    while (this.board[a]) {
        if (this.board[a][b] !== undefined && b >= 0) {
            if (this.board[a][b]) {
                break;
            }
            this.moves++
            a++
            b--
        } else {
            break;
        }
    }

    /** Handle down right */
    let c = this.queenSpot[0] + 1
    let d = this.queenSpot[1] + 1

    while (this.board[c]) {
        if (this.board[c][d] !== undefined && d >= 0) {
            if (this.board[c][d]) {
                break;
            }
            this.moves++
            c++
            d++
        } else {
            break;
        }
    }

    /** Handle up left */
    let e = this.queenSpot[0] - 1
    let f = this.queenSpot[1] - 1

    while (this.board[e]) {
        if (this.board[e][f] !== undefined && f >= 0) {
            if (this.board[e][f]) {
                break;
            }
            this.moves++
            e--
            f--
        } else {
            break;
        }
    }

    /** Handle up right */
    let h = this.queenSpot[0] - 1
    let i = this.queenSpot[1] + 1

    while (this.board[h]) {
        if (this.board[h][i] !== undefined && i >= 0) {
            if (this.board[h][i]) {
                break;
            }
            this.moves++
            h--
            i++
        } else {
            break;
        }
    }
    return this
}

function queensAttack(n, k, r_q, c_q, obstacles) {
    let chess = new Chess()
    chess.makeBoard(n)
    chess.placeQueen(r_q, c_q)
    chess.placeObstacles(k, obstacles)
    chess.countHorizontal(n)
    chess.countVertical(n)
    chess.countDiagonal(n)
    console.log('Queen', chess.queenSpot)
    return chess.moves
}

console.log(queensAttack(10000, 0, 4187, 5068, []))