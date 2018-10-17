import { Injectable } from '@angular/core';
    import { Board } from './board'
    import { Player } from './player'

    @Injectable()
    export class BoardService {

      playerId: number = 1;
      boards: Board[] = [];

      constructor() { }

      // method for creating a board which takes
      // an optional size parameter that defaults to 5
      createBoard(size:number = 8) : BoardService {
        // create tiles for board
        let tiles = [];
        
        tiles[0][0] = { used: false, value: 0, status: '' };
        tiles[0][1] = { used: false, value: 2, status: '' };
        tiles[0][2] = { used: false, value: 0, status: '' };
        tiles[0][3] = { used: false, value: 2, status: '' };
        tiles[0][4] = { used: false, value: 1, status: '' };
        tiles[0][5] = { used: false, value: 3, status: '' };
        tiles[0][6] = { used: false, value: 1, status: '' };
        tiles[0][7] = { used: false, value: 2, status: '' };
        
        tiles[1][0] = { used: false, value: 3, status: '' };
        tiles[1][1] = { used: false, value: 1, status: '' };
        tiles[1][2] = { used: false, value: 2, status: '' };
        tiles[1][3] = { used: false, value: 0, status: '' };
        tiles[1][4] = { used: false, value: 3, status: '' };
        tiles[1][5] = { used: false, value: 0, status: '' };
        tiles[1][6] = { used: false, value: 3, status: '' };
        tiles[1][7] = { used: false, value: 0, status: '' };
        
        tiles[2][0] = { used: false, value: 0, status: '' };
        tiles[2][1] = { used: false, value: 2, status: '' };
        tiles[2][2] = { used: false, value: 1, status: '' };
        tiles[2][3] = { used: false, value: 2, status: '' };
        tiles[2][4] = { used: false, value: 1, status: '' };
        tiles[2][5] = { used: false, value: 2, status: '' };
        tiles[2][6] = { used: false, value: 1, status: '' };
        tiles[2][7] = { used: false, value: 3, status: '' };
        
        tiles[3][0] = { used: false, value: 2, status: '' };
        tiles[3][1] = { used: false, value: 1, status: '' };
        tiles[3][2] = { used: false, value: 3, status: '' };
        tiles[3][3] = { used: false, value: 0, status: '' };
        tiles[3][4] = { used: false, value: 3, status: '' };
        tiles[3][5] = { used: false, value: 1, status: '' };
        tiles[3][6] = { used: false, value: 2, status: '' };
        tiles[3][7] = { used: false, value: 1, status: '' };
        
        tiles[4][0] = { used: false, value: 0, status: '' };
        tiles[4][1] = { used: false, value: 3, status: '' };
        tiles[4][2] = { used: false, value: 0, status: '' };
        tiles[4][3] = { used: false, value: 2, status: '' };
        tiles[4][4] = { used: false, value: 0, status: '' };
        tiles[4][5] = { used: false, value: 3, status: '' };
        tiles[4][6] = { used: false, value: 0, status: '' };
        tiles[4][7] = { used: false, value: 3, status: '' };
        
        tiles[5][0] = { used: false, value: 2, status: '' };
        tiles[5][1] = { used: false, value: 1, status: '' };
        tiles[5][2] = { used: false, value: 3, status: '' };
        tiles[5][3] = { used: false, value: 1, status: '' };
        tiles[5][4] = { used: false, value: 3, status: '' };
        tiles[5][5] = { used: false, value: 1, status: '' };
        tiles[5][6] = { used: false, value: 2, status: '' };
        tiles[5][7] = { used: false, value: 1, status: '' };

        tiles[6][0] = { used: false, value: 0, status: '' };
        tiles[6][1] = { used: false, value: 2, status: '' };
        tiles[6][2] = { used: false, value: 0, status: '' };
        tiles[6][3] = { used: false, value: 2, status: '' };
        tiles[6][4] = { used: false, value: 0, status: '' };
        tiles[6][5] = { used: false, value: 2, status: '' };
        tiles[6][6] = { used: false, value: 0, status: '' };
        tiles[6][7] = { used: false, value: 3, status: '' };

        tiles[7][0] = { used: false, value: 2, status: '' };
        tiles[7][1] = { used: false, value: 0, status: '' };
        tiles[7][2] = { used: false, value: 2, status: '' };
        tiles[7][3] = { used: false, value: 1, status: '' };
        tiles[7][4] = { used: false, value: 3, status: '' };
        tiles[7][5] = { used: false, value: 1, status: '' };
        tiles[7][6] = { used: false, value: 3, status: '' };
        tiles[7][7] = { used: false, value: 1, status: '' };
        
        // create board
        let board = new Board({
          player: new Player({ id: this.playerId++ }),
          tiles: tiles
        });
        // append created board to `boards` property
        this.boards.push(board);
        return this;
      }

      // returns all created boards
      getBoards() : Board[] {
        return this.boards;
      }
    }