import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number, maxLifePoints: number) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
  }

  maxLifePoints(): number {
    return this._maxLifePoints;
  }
}