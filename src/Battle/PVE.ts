import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(player1: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._monsters = monsters;
  }

  private nobodyIsDead(): boolean {
    return this.player.lifePoints !== -1 
    && this._monsters.every((monster) => monster.lifePoints !== -1);
  }

  fight(): number {
    while (this.nobodyIsDead()) {
      for (let i = 0; i < this._monsters.length; i += 1) {
        this._player1.attack(this._monsters[i]);
      }

      // for (let i = 0; i < this._monsters.length; i += 1) {
      //   this._monsters.
      // }
      // this.player.attack(this._player2);
      // this._player2.attack(this.player);
    }
    return super.fight();
  }
}

// RESOLVER TYPES QUE NAO DEIXAM IMPLEMENTAR A LUTA