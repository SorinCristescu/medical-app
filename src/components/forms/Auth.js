import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

const createUser = async (email, password) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  // if (!response.ok) {
  //   throw new Error('Something went wrong!');
  // }

  return data;
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // log user in
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (!result.error) {
        router.replace('/profile');
      }
    } else {
      // add validation

      await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(email, password);
      setEmail('');
      setPassword('');
    }
  };
  return (
    <form onSubmit={submitHandler} className="form-container">
      <h1>{isLogin ? 'Sign in' : 'Sign up'}</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <button type="submit">{isLogin ? 'Login' : 'Create account'}</button>
      <button type="button" onClick={switchAuthModeHandler}>
        {isLogin ? 'Create new account' : 'Sign in with existing account'}
      </button>
    </form>
  );
};

export default Auth;
