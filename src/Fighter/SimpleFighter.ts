export default interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}

// Duvidas
// Como fazer para nao repetir codigo utilizando as duas interfaces?
// Pq a importação da interface SimplePFighter deve ser feita entre {}?