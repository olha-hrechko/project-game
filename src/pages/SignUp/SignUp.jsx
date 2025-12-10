import Input from '../../components/Input/Input.jsx'
import Button from '../../components/Button/Button.jsx'
import React, {useEffect, useState} from 'react'
import { FaEye } from "react-icons/fa";
import { useUser } from '../../context/UserContext.jsx';
import { useNavigate, Link } from 'react-router-dom';
import { auth, database } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError]= useState ({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();  

  useEffect(() => {
  if (user) {
    navigate('/greeting');
  }
}, [user, navigate]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

   const errors = {};
   if (!email) {
    errors.email = "L'email est requis";
   } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "L'email est invalide";
   }
   if (!username) {
   errors.username = "Le nom d'utilisateur est requis";
   } else if (username.length < 5) {
    errors.username = "Le nom d'utilisateur doit contenir au moins 5 caractères";
   }
   if (!password) {
    errors.password = "Le mot de passe est requis";
   } 
   if (password.length < 6) {
    errors.password = "Le mot de passe doit contenir au moins 6 caractères";
   }  
   if (password !== confirmpassword) {
    errors.confirmpassword = "Les mots de passe ne correspondent pas";
   }

   setError(errors);

   if (Object.keys(errors).length > 0) {
    return;
   };

   try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
const safeUsername = username.replace(/[.#$/\[\]]/g, "_");

const userRef = ref(database, `users/${user.uid}`);

await set(userRef, {
  email: user.email,
  username: safeUsername, 
  wallet: 0,
  happiness: 0,
  wisdom: 0,
  reputation: 0,
  progressbar: 0,
  goal: '',
  level: 0,
  result: { 
    impulsivepattern: 0, 
    mixedpattern: 0, 
    strategicpattern: 0, 
    econompattern: 0 
  }
});

    setUser({ 
      email: user.email, 
      username, 
      uid: user.uid,
      wallet: 0,
      happiness: 0,
      wisdom: 0,
      reputation: 0,
      progressbar: 0,
      goal: '',
      level: 0,
      result: {impulsivepattern: 0, mixedpattern: 0, strategicpattern: 0, econompattern: 0}
    });
    
    navigate('/greeting');
   } catch (error) {
    console.error("Erreur d'inscription:", error);
    if (error.code === 'auth/email-already-in-use') {
      setError({ email: "Cet email est déjà utilisé" });
    } else {
      setError({ general: error.message });
    }
   }
}

    return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '500px'}}>
        <h1 className="game-title"> Inscription</h1>
        <form onSubmit={handleSubmit}>
          <Input error={error.email} isSubmit={isSubmit} type="email" placeholder="Email" text="Email" value={email} onChange={e => setEmail (e.target.value)}/>
          <Input error={error.username} isSubmit={isSubmit} type="text" placeholder="Nom d'utilisateur" text="Nom d'utilisateur" value={username} onChange={e => setUsername (e.target.value)}/>
          <Input isShown={showPassword} onClick={setShowPassword} error={error.password} isSubmit={isSubmit} type="password" placeholder="Mot de passe" text="Mot de passe" value={password} onChange={e => setPassword (e.target.value)}/>
          <Input isShown={showConfirmPassword} onClick={setShowConfirmPassword} error={error.confirmpassword} isSubmit={isSubmit} type="password" placeholder="Répéter le mot de passe" text="Confirmer le mot de passe" value={confirmpassword} onChange={e => setConfirmpassword (e.target.value)}/>
          {error.general && <p style={{color: '#dc2626', marginTop: '1rem', fontSize: '1rem'}}>{error.general}</p>}
          <Button type="submit" text="S'inscrire"/>
          <p style={{marginTop: '1.5rem', fontSize: '1rem', textAlign: 'center'}}>
            Déjà un compte? <Link to="/signin" style={{color: '#7e22ce', fontWeight: '600', textDecoration: 'underline'}}>Se connecter</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
