import { apiKey, client } from '../../services/authApi';

export const authenticate =
  ({ email, password, authType }) =>
  async (dispatch) => {
    try {
      const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
      const res = await client.post(
        `accounts:${paramType}?key=${apiKey}`,
        JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        })
      );

      const { expiresIn } = res.data;
      return resEmail;
    } catch (error) {
      let message = error.response.data.error.message;
      if (message === 'EMAIL_NOT_FOUND') {
        message = 'Email doesnot exist! Please sign up!';
      } else if (message === 'INVALID_PASSWORD') {
        message = 'The password is incorrect!';
      } else if (message === 'USER_DISABLED') {
        message = 'You are disabled by the administrator';
      } else if (message === 'EMAIL_EXISTS') {
        message = 'This email already exists. Sign in, please!';
      } else if (message === 'OPERATION_NOT_ALLOWED') {
        message = 'Sign in is disabled';
      } else if (message.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
        message = 'You have tried enough... Come back later!';
      }
      throw new Error(message);
    }
  };
