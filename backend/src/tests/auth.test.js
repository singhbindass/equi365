import request from 'supertest';
import app from '../index'; // assuming app is exported from index.js

describe('Auth API', () => {
  it('should return 401 for missing token', async () => {
    const res = await request(app).get('/api/protected');
    expect(res.statusCode).toBe(401);
  });
});
