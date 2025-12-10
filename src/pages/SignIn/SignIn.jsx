import react, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { FaEye } from "react-icons/fa";
import { useUser } from "../../context/UserContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { auth, database } from '../../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { ref, get } from 'firebase/database';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handlePasswordReset = async () => {
    if (!email) {
      setError({ email: "Введіть email для скидання пароля" });
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage("Лист для скидання пароля надіслано на вашу пошту");
      setError({});
    } catch (error) {
      console.error("Помилка скидання пароля:", error);
      if (error.code === 'auth/user-not-found') {
        setError({ email: "Користувача з таким email не знайдено" });
      } else {
        setError({ general: error.message });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const userRef = ref(database, "users/" + user.uid);
      const userSnap = await get(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.val();
        setUser({ 
        email: user.email, 
        username: userData.username, 
        uid: user.uid, 
        wallet: userData.wallet, 
        happiness: userData.happiness, 
        wisdom: userData.wisdom, 
        reputation: userData.reputation,
        progressbar: userData.progressbar,
        goal: userData.goal,
        level: userData.level,
        levelOneCompleted: userData.levelOneCompleted,
        result: userData.result
        });
      } else {
        setUser({ email: user.email });
      }
      
      navigate('/');
    } catch (error) {
      console.error("Помилка входу:", error);
      if (error.code === 'auth/invalid-credential') {
        setError({ general: "Невірний email або пароль" });
      } else if (error.code === 'auth/user-not-found') {
        setError({ email: "Користувача не знайдено" });
      } else if (error.code === 'auth/wrong-password') {
        setError({ password: "Невірний пароль" });
      } else {
        setError({ general: error.message });
      }
    }
  };

      return (
      <div className="game-page">
        <div className="game-card" style={{maxWidth: '500px'}}>
          <h1 className="game-title"> Вхід</h1>
          <form onSubmit={handleSubmit}>
            <Input error={error.email} isSubmit={isSubmit} type="email" placeholder="Email" text="Email" value={email} onChange={e => setEmail (e.target.value)}/>
            <Input isShown={showPassword} onClick={setShowPassword} error={error.password} isSubmit={isSubmit} type="password" placeholder="Password" text="Password" value={password} onChange={e => setPassword (e.target.value)}/>
            {error.general && <p style={{color: '#dc2626', marginTop: '1rem', fontSize: '1rem'}}>{error.general}</p>}
            {resetMessage && (
              <>
                <p style={{color: '#16a34a', marginTop: '1rem', fontSize: '1rem'}}>{resetMessage}</p>
                <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem'}}>
                  💡 Перевірте папку "Спам", якщо не бачите листа
                </p>
              </>
            )}
            <Button type="submit" text="Увійти"/>
            <p style={{marginTop: '1.5rem', fontSize: '1rem', textAlign: 'center'}}>
              Немає аккаунту? <Link to="/signup" style={{color: '#7e22ce', fontWeight: '600', textDecoration: 'underline'}}>Зареєструватися</Link>
            </p>
            <p style={{marginTop: '1rem', textAlign: 'center'}}>
              <span onClick={handlePasswordReset} style={{color: '#7e22ce', cursor: 'pointer', textDecoration: 'underline', fontSize: '1rem'}}>
                Забули пароль?
              </span>
            </p>
          </form>
        </div>
      </div>
    )
};

export default SignIn;
