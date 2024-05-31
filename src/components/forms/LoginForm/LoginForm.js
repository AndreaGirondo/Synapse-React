import React, { useState, useEffect } from 'react';
import { LoginUser } from '../../../api/RouteAPI';
import Modal from 'react-modal';
import RegisterForm from '../RegisterForm/RegisterForm';

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
      <>
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white text-sm font-semibold leading-6"
          >
            Se connecter
          </button>
          <span className="mx-4">/</span>
          <RegisterForm />
        </div>
  
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={{
            content: {
              width: '32vw',
              height: '76vh',
              margin: 'auto',
              backgroundColor: '#111827',
              border: 'none',
              borderRadius: '0.7rem',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.78)',
              zIndex: 1100,
            },
          }}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <h2 className="text-3xl font-bold text-center text-white">Se connecter</h2>
              <div className="divBtn">
                <label className="labelInput font-poppins text-white font-bold text-xs">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-4 bg-[#FFFFFF] text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errorMessage.email && (
                  <div className="errorMessage text-red-500 text-xs">
                    {errorMessage.email.join(', ')}
                  </div>
                )}
              </div>
  
              <div className="mt-5">
                <label className="labelInput font-poppins text-white font-bold text-xs">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-4 bg-[#FFFFFF] text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-2 text-#111827"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errorMessage.password && (
                  <div className="errorMessage text-red-500 text-xs">
                    {errorMessage.password.join(', ')}
                  </div>
                )}
                {errorMessage.general && (
                  <div className="errorMessage text-red-500 text-xs">
                    {errorMessage.general}
                  </div>
                )}
              </div>
  
              <div>
                <button
                  type="button"
                  value="Submit"
                  onClick={handleClick}
                  className="flex w-full justify-center rounded-md bg-[#0072B4] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 hover:text-[#0072B4]"
                >
                  Se connecter
                </button>
              </div>
  
              <div className="mt-10 text-center text-sm text-gray-500">
                <a href="/" className="font-semibold leading-6 text-white">
                  je n'ai pas de compte <span className="text-[#0072B4] underline">S'inscrire</span>
                </a>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }

  function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="relative">
        {isAuthenticated ? (
          <div className="relative inline-block text-left">
            <span
              className="text-white text-sm font-bold leading-6"
              onClick={toggleMenu}
            >
              {name}
            </span>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Se déconnecter
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <LoginForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setName={setName}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      </div>
    );
  }
  
  export default App;