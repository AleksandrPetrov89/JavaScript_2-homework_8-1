import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (!(hero instanceof Character)) {
      throw new Error('Объект не является экземпляром класса Character!');
    }
    if (this.members.has(hero)) {
      throw new Error('Персонаж уже в команде!');
    } else {
      this.members.add(hero);
    }
  }

  addAll(...heroes) {
    heroes.forEach((hero) => { this.members.add(hero); });
  }

  toArray() {
    const members = [...this.members];
    return members;
  }
}
