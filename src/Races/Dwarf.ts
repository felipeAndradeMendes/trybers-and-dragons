import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number, maxLifePoints: number) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
  }

  maxLifePoints(): number {
    return this._maxLifePoints;
  }
}