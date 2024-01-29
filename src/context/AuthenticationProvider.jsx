import { createContext, useCallback, useReducer } from 'react';

export const context = createContext();

const initialState = {
  user: localStorage.getItem('access_token') || null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload };
    case 'logout':
      return { ...state, user: null };
    default:
      throw new Error('Invalid action');
  }
}

function AuthenticationProvider({ children }) {
  const [{ user }, dispatch] = useReducer(reducer, initialState);

  const login = useCallback(function login(value) {
    dispatch({ type: 'login', payload: value });
    localStorage.setItem('access_token', value);
  }, []);

  function logout() {
    dispatch({ type: 'logout', payload: null });
  }

  return (
    <context.Provider value={{ login, logout, user }}>
      {children}
    </context.Provider>
  );
}

export default AuthenticationProvider;
