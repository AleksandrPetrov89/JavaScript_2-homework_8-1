export default class Character {
  #types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка при присвоении имени!');
    }
    this.name = name;
    if (!this.#types.includes(type)) {
      throw new Error('Ошибка при присвоении типа персонажа!');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
