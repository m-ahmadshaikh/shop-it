const apiKey = 'AIzaSyC8VI5Q1XlNAUiEDbfBlFWtbHWWy86nopE';
const authenticate = async ({ email, password, authType }) => {
  const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:${paramType}?key=${apiKey}`,
    {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await res.json();
  const { idToken } = data;
  return idToken;
};

export default authenticate;
