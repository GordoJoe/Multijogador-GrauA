// import needed classes and services
    import { Component, ViewContainerRef } from '@angular/core';
    import { ToastsManager } from 'ng2-toastr/ng2-toastr';
    import { BoardService } from './board.service'
    import { Board } from './board'

    // set game constants
    const NUM_PLAYERS: number = 2;
    const BOARD_SIZE: number = 8;

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      providers: [BoardService]
    })

    export class AppComponent {
      canPlay: boolean = true;
      player: number = 0;
      players: number = 0;
      gameId: string;
      gameUrl: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');

      constructor(
        private toastr: ToastsManager,
        private _vcr: ViewContainerRef,
        private boardService: BoardService
      ) {
        this.toastr.setRootViewContainerRef(_vcr);
        this.createBoards();
      }

      // event handler for click event on
      // each tile - fires torpedo at selected tile
      fireTorpedo(e:any) : AppComponent {
        let id = e.target.id,
          boardId = id.substring(1,2),
          row = id.substring(2,3), col = id.substring(3,4),
          tile = this.boards[boardId].tiles[row][col];
        if (!this.checkValidHit(boardId, tile)) {
          return;
        }

        if (tile.value == 0 || tile.value == 2) {
          this.boards[boardId].tiles[row][col].status = 'Torre';
          this.boards[boardId].tiles[row][col].used = true;
          this.boards[boardId].tiles[row][col].value = "X";
        } else {
          this.toastr.info("Não pode bota torre aqui");
          this.boards[this.player].player.Gold++;
        }
        this.canPlay = false;
        return this;
      }

      checkValidHit(boardId: number, tile: any) : boolean {
        if (boardId == this.player) {
          this.toastr.error("Mapa errado, o teu é o otro")
          return false;
        }
        if (this.winner) {
          this.toastr.error("GG Toboco");
          return false;
        }
        if (!this.canPlay) {
          this.toastr.error("Calma rapa os programador teve dificuldade pra faze realtime");
          return false;
        }
        if(tile.value == "X") {
          this.toastr.error("ja tem uam torre aqui");
          return false;
        }
        return true;
      }

      createBoards() : AppComponent {
        for (let i = 0; i < NUM_PLAYERS; i++)
          this.boardService.createBoard(BOARD_SIZE);
        return this;
      }

      // winner property to determine if a user has won the game.
      // once a user gets a score higher than the size of the game
      // board, he has won.
      get winner () : Board {
        return this.boards.find(board => board.player.Vivo == false);
      }

      // get all boards and assign to boards property
      get boards () : Board[] {
        return this.boardService.getBoards()
      }
    }