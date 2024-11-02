import React from 'react';
import renderer from 'react-test-renderer';
import { createUsers, getAllUsers } from '../src/services/api/apiFunction';

import { callAPI } from '../src/services/api';

jest.mock('../src/services/api');

it('fetches and returns users correctly', async () => {
  callAPI.mockResolvedValue({
    data: [
      {
        phone: 123456789,
        name: 'George',
        userId: 'qweeeeeeee'
      },
      {
        phone: 9876543210,
        name: 'rohan',
        userId: 'zxksjsha'
      }
    ]
  });
  // Call the function you’re testing
  const result = await getAllUsers();

  // Make an assertion on the result to match the mocked data
  expect(result).toEqual([
    {
      phone: 123456789,
      name: 'George',
      userId: 'qweeeeeeee'
    },
    {
      phone: 9876543210,
      name: 'rohan',
      userId: 'zxksjsha'
    }
  ]);
});