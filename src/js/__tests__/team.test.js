import Character from '../classes/character';
import Team from '../classes/team';

beforeEach(() => {
  // eslint-disable-next-line no-use-before-define
  team.members.clear();
});

const hero1 = new Character('hero1', 'Bowman');
const hero2 = new Character('hero2', 'Swordsman');
const team = new Team();

test('Проверка появления ошибки при добавлении в команду не Character', () => {
  const mistake = () => team.add({});
  expect(mistake).toThrow(new Error('Объект не является экземпляром класса Character!'));
});

test('Проверка появления ошибки при повторном добавлении в команду', () => {
  team.add(hero1);
  const mistake = () => team.add(hero1);
  expect(mistake).toThrow(new Error('Персонаж уже в команде!'));
});

test('Проверка добавления в команду методом add', () => {
  expect(team.members.size).toBe(0);
  team.add(hero2);
  expect(team.members.size).toBe(1);
  expect(team.members.has(hero2)).toBe(true);
});

test('Проверка добавления в команду методом addAll', () => {
  expect(team.members.size).toBe(0);
  team.addAll(hero1, hero2, hero1, hero2);
  expect(team.members.size).toBe(2);
  expect(team.members.has(hero1)).toBe(true);
  expect(team.members.has(hero2)).toBe(true);
});

test('Проверка метода toArray', () => {
  team.addAll(hero1, hero2);
  expect(Array.isArray(team.toArray())).toBe(true);
});
