import React, { useState } from 'react';
import './App.css';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email === 'amanda.hiraide@pucpr.br' && password === '123456') {
      setMessage('✅ Acessado com sucesso!');
    } else {
      setMessage('❌ Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleLogin} className="login-button">Acessar</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default LoginComponent;
