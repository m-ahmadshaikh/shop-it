const apiKey = 'AIzaSyC8VI5Q1XlNAUiEDbfBlFWtbHWWy86nopE';
const authenticate = async ({ email, password, authType }) => {
  const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:${paramType}?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { email, password },
      }
    );
    if (!res.ok) {
      throw new Error(res);
    }
    const data = await res.json();
    const { idToken } = data;
    return idToken;
  } catch (e) {
    console.log(e);
  }
};

export default authenticate;
