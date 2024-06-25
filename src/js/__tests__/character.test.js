import Character from '../classes/character';

test.each([
  ['Bowman'],
  ['Swordsman'],
  ['Magician'],
  ['Undead'],
  ['Zombie'],
  ['Daemon'],
])(
  ('Проверка присвоения типа %s'),
  (type) => {
    const character = new Character('Ivan', type);
    expect(character.type).toBe(type);
  },
);

test.each([
  ['Iv'],
  ['IvanIvan01'],
])(
  ('Проверка присвоения имени %s'),
  (name) => {
    const character = new Character(name, 'Bowman');
    expect(character.name).toBe(name);
  },
);

test.each([
  ['I'],
  ['IvanIvan001'],
  [23],
])(
  ('Проверка появления ошибки при присвоении имени %s'),
  (name) => {
    const mistake = () => new Character(name, 'Bowman');
    expect(mistake).toThrow(new Error('Ошибка при присвоении имени!'));
  },
);

test('Проверка появления ошибки при присвоении некорректного типа', () => {
  const mistake = () => new Character('Ivan', 'B');
  expect(mistake).toThrow(new Error('Ошибка при присвоении типа персонажа!'));
});

test('Проверка присвоения уровня жизни и персонажа', () => {
  const character = new Character('Ivan', 'Bowman');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
});
