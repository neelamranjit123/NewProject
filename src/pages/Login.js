import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from "../firebase/firebase";
import 'tailwindcss/tailwind.css';
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Email:', email);
    //console.log('Password:', password);
    //console.log('Logging in with:', email, password);

    try {
      // await auth.signInWithEmailAndPassword(email, password);
      await signInWithEmailAndPassword(auth, email, password );
      console.log('Login successful');
      navigate('/homepage');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-black rounded shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-white mb-4">Login</h2>
      <label className="block mb-1">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <label className="block mb-2">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <Link to="/homepage">
      <button onClick={handleLogin} className="bg-blue-900 py-2 px-4 rounded shadow text-white cursor-pointer">
        Login
      </button>
      </Link>
      <br/>
      <Link to="/">
      <button className="bg-blue-900 py-2 px-4 rounded shadow text-white cursor-pointer">
          Go Back
      </button>
      </Link>
    </div>
  );
};

export default Login;

