import { computed, Injectable, signal } from "@angular/core";

@Injectable()
export class LightsOffStore {
  private _size = signal(0);
  private _board = signal<number[][]>([]);


  readonly size = this._size.asReadonly();
  readonly board = this._board.asReadonly();

  finished = computed(() => {
    return this.count() == 0;
  });
  // 当前亮灯数
  count = computed(() => {
    return this.board().flat().filter(cell => cell === 1).length;
  });

  init(size: number) {
    if (size < 3 || size > 9) {
      throw new Error('棋盘大小限定在3x3到9x9大小');
    }
    this._size.set(size);
    let board = new Array(this.size()).fill(null).map(() => new Array(this.size()).fill(0));
    board = this.shuffle(board);
    this._board.set([...board]);
  }

  shuffle(board: number[][]) {
    for (let i = 0; i < this.size(); i++) {
      for (let j = 0; j < this.size(); j++) {
        board[i][j] = Math.floor(Math.random() * 2);
      }
    }
    return [...board];
  }

  updateBoard(board: number[][]) {
    this._board.set([...board]);
  }
}
