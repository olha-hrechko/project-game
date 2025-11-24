import Input from '../../components/Input/Input.jsx'
import Button from '../../components/Button/Button.jsx'
import React, {useEffect, useState} from 'react'
import { FaEye } from "react-icons/fa";
import { useUser } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]= useState ({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
  if (user) {
    navigate('/greeting');
  }
}, [user, navigate]);

  useEffect(() => {
   const errors = {};
   if (!username) {
    errors.username = "Username is required";
   } else if (username.length < 5) {
    errors.username = "Username must be at least 5 characters";
   }
   if (!password) {
    errors.password = "Password is required";
   } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
   }
   setError(errors)
}, [username, password])

const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (error.username || error.password) {
      return;
    };
    localStorage.setItem('user', JSON.stringify({ username }));
    setUser({ username });
    navigate('/greeting');
}

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input error={error.username} isSubmit={isSubmit} type="text" placeholder="Username" text="Username" value={username} onChange={e => setUsername (e.target.value)}/>
        <Input isShown={showPassword} onClick={setShowPassword} error={error.password} isSubmit={isSubmit} type="password" placeholder="Password" text="Password" value={password} onChange={e => setPassword (e.target.value)}/>
        <Button type="submit" text="Login"/>
      </form>
    </div>
  )
}

export default Auth
