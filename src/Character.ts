import Archetype from './Archetypes';
import Race from './Races';
import Fighter from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';
import Elf from './Races/Elf';
import Mage from './Archetypes/Mage';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage('Mago1');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, amount: getRandomInt(1, 10), 
    };
  }

  // GETTERS
  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  // VER COMO DEIXAR PROTEGIDOS AS KEYS DESSE OBJ
  get energy(): Energy {
    return { ...this._energy };
  }

  // UTILS
  private levelUpAttrRandom(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
  }

  private validateMaxLifePointsByRace(): void {
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
  }

  // FIGHTER METHODS
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } 
    
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
  
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.levelUpAttrRandom();
    this._energy.amount = 10;
    this.validateMaxLifePointsByRace();
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 1.5);
    console.log('Você é especial pra mim');
  }
}

// const car1 = new Character('Felipe');