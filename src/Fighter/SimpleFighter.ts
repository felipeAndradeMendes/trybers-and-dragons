export default interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}

// FALTA FAZER A SEGREGAÇÃO DE INTERFACES COMO PROPOSTO