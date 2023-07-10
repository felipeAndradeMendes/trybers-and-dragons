import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number, maxLifePoints: number) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
  }

  maxLifePoints(): number {
    return this._maxLifePoints;
  }
}