import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  battle() {
    while (super.fight() > 0 && this.fight() > 0) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
  }

  fight(): number {
    return this._player2.lifePoints === -1 ? -1 : 1;
  }
}