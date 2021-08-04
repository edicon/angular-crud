import * as fromAuth from '../reducers/auth.reducer';
import { selectAuthState } from './auth.selectors';

describe('Auth Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAuthState({
      [fromAuth.authFeatureKey]: {},
    });

    expect(result).toContain('user');
  });
});