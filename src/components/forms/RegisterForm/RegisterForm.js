import React, { useState, useEffect } from 'react';
import { RegisterUser, LoginUser } from '../../../api/RouteAPI';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ReactGA from 'react-ga';

Modal.setAppElement('#root');

function RegisterForm({ isModalOpen, setIsModalOpen, setIsAuthenticated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  
  const navigate = useNavigate();

  const handleClick = async () => {
    const userData = { name, email, password, password_confirmation };
    try {
      const response = await RegisterUser(userData);
      if (response.errors) {
        const responseErrors  = response.errors;
        setErrorMessage(responseErrors);
        console.log(responseErrors);
      } else {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('name', response.user.name); 
        localStorage.setItem('userId', response.user.id); 
        localStorage.setItem('isAuthenticated', 'true');
        setName(response.user.name);
        setIsAuthenticated(true);
        const loginResponse = await LoginUser({ email: response.user.email, password: password });
        if (loginResponse.errors) {
            console.log(loginResponse.errors);
          } else {
          localStorage.setItem('token', loginResponse.token);
          localStorage.setItem('name', loginResponse.user.name); 
          localStorage.setItem('userId', loginResponse.user.id); 
          localStorage.setItem('isAuthenticated', 'true');
          setName(loginResponse.user.name);
          setIsAuthenticated(true);
          window.location.reload();
        }
      }
    } catch (errors) {
      console.log(errors);
    }
    ReactGA.event({
      category: 'User',
      action: 'Clicked Register Button'
    });
  };

  return (
    <div className="">
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white text-sm font-bold leading-6"
      >
        Inscription
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            width: '32vw',
            height: '85vh',
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
            <h2 className="text-3xl font-bold text-center text-white">Crée un compte</h2>
            <div className="divBtn">
              <label className="labelInput font-poppins text-white font-bold text-xs">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-4 bg-[#FFFFFF] text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errorMessage.name && (
                <div className="errorMessage text-red-500 text-xs">
                  {errorMessage.name.join(', ')}
                </div>
              )}
            </div>

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
            </div>

            <div className="mt-5">
              <label className="labelInput font-poppins text-white font-bold text-xs">
                Confirmé le mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPasswordConfirmation ? 'text' : 'password'}
                  value={password_confirmation}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-4 bg-[#FFFFFF] text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showPasswordConfirmation)}
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-#111827"
                >
                  {showPasswordConfirmation ? 'Hide' : 'Show'}
                </button>
              </div>
              {errorMessage.password_confirmation && (
                <div className="errorMessage text-red-500 text-xs">
                  {errorMessage.password_confirmation.join(', ')}
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
                S'inscrire
              </button>
            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
              <a href="/login" className="font-semibold leading-6 text-white">
                j'ai déjà un compte <span className="text-[#0072B4] underline">me connecter</span>
              </a>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      ReactGA.event({
        category: 'User',
        action: 'Opened Register Form'
      });
    }
  }, [isModalOpen]);

  return (
    <div>
      <RegisterForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setName={setName} setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default App;
