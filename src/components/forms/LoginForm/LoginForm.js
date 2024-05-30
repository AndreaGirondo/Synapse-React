import React, { useState, useEffect } from 'react';
import { LoginUser } from '../../../api/RouteAPI';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

function LoginForm({ isModalOpen, setIsModalOpen, setName, setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const handleClick = async () => {
    const userData = { email, password };
    try {
      const response = await LoginUser(userData);
      if (response.status_code === 403) {
        setErrorMessage({ general: 'Information non valide' });
      } else if (response.errorsList) {
        const response_errorsList = response.errorsList;
        setErrorMessage(response_errorsList);
        console.log(response_errorsList);
      } else {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('name', response.user.name); 
        localStorage.setItem('userId', response.user.id); 
        localStorage.setItem('isAuthenticated', 'true');
        setName(response.user.name); // Mettre à jour l'état local du name
        setIsAuthenticated(true); // Mettre à jour l'état d'authentification
        setIsModalOpen(false); // Fermer la modal après la connexion réussie
        window.location.reload();
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className='text-black'>Se connecter</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            width: '32vw', // utilisation d'unité relative
            height: '76vh',
            margin: 'auto',
            backgroundColor: '#1C1C1C',
            border: 'none',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.78)',
            zIndex: 1100,
          },
        }}
      >

        <div className='divBtn'>
          <label className='labelInput font-poppins text-white font-bold text-xs'>Email</label>

          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className='btnRegister font-poppins font-medium mt-1'/>
          {errorMessage.email &&
            <div className='errorMessage'>{errorMessage.email.join(', ')}</div>
          }

        </div>

        <div className='mt-5 ml-[6em]'>
          <label className='labelInput font-poppins text-white font-bold text-xs'>Mot de passe</label>
          <div className='relative'>

            <input 
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='flex bg-[#1C1C1C] p-[1vh] border-[1.2px] border-[#4F4F4F] rounded-[6px] w-[24vw] text-white font-poppins font-medium mt-1'
            />

            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute inset-y-0 right-0 flex items-center px-2 text-white'
            >
            {showPassword ? 'Hide' : 'Show'}
            </button>

          </div>

          {errorMessage.password && 
            <div className='errorMessage'>{errorMessage.password.join(', ')}</div>
          }
          {errorMessage.general && 
            <div className='errorMessage'>{errorMessage.general}</div>
          }

        </div>

        <button type="button" value="Submit" onClick={handleClick} className='btnSubmit text-orange_FFA800 font-poppins text-2xl font-bold'>Se connecter</button>

        <a href="/" className='dejaCompte font-poppins text-sm font-extrabold text-gris_F1F1F1'>
          je n'ai pas de compte
          <span className='text-orange_FFA800'>.</span>
          <span className='sinscrire font-poppins text-orange_FFA800 underline'>S'inscrire</span>
        </a>

      </Modal>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const savedName = localStorage.getItem('name');
    if (token && isAuthenticated && savedName) {
      setName(savedName);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    setName('');
    window.location.reload(); 
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <span className='text-black 2xl'>{name}</span>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      ) : (
        <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setName={setName} setIsAuthenticated={setIsAuthenticated}/>
      )}
    </div>
  );
}

export default App;
