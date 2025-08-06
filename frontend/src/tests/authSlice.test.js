import { describe, it, expect } from 'vitest';
import authReducer, { logout } from '../features/auth/authSlice';

describe('authSlice', () => {
  it('should handle logout', () => {
    const initialState = { user: { email: 'test@test.com' }, token: '123' };
    const newState = authReducer(initialState, logout());
    expect(newState.user).toBe(null);
    expect(newState.token).toBe(null);
  });
});
