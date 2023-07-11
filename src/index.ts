import Monster from './Monster';
import Character from './Character';

const monster1 = new Monster(50, 40);
const character1 = new Character('Felipe');

monster1.attack(character1);
character1.attack(monster1);