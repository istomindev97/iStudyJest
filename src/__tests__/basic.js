import calculteTotal from '../calculate';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 132,
      name: 'война и мир',
      count: 3,
      price: 401,
    },
    {
      id: 132,
      name: 'JS',
      count: 1,
      price: 1300,
    },

  ];

  const result = calculteTotal(list);
  expect(result).toBe(2503);
});

test('calculateTotal sum with discount', () => {
  const list = [
    {
      id: 132,
      name: 'война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 132,
      name: 'JS',
      count: 1,
      price: 1300,
    },

  ];

  const result = calculteTotal(list, true);
  expect(result).toBeCloseTo(2227.5);
});
