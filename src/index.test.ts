import axios from 'axios';

describe('Test base routes', () => {
  test('Test if ping route is working', async () => {
    const result = await axios.get('http://localhost:8000');
    expect(result.data).toEqual({ ok: true });
  });
});
