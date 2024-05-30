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
    <div className=''>
      <button onClick={() => setIsModalOpen(true)} className='text-black font-poppins font-bold grid gad-8'>Inscription</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="md:h-full md:w-4/12 grid-cols-2 m-auto bg-[#1C1C1C] mt-9 mb-9 rounded-lg "    
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[1100]"
        >

          <div className=' text-white font-poppins font-extrabold text-4xl text-center'>Crée un compte<span className='text-orange_FFA800'>.</span></div>

            <div className='mt-5 ml-[6em]'>
              <label className='labelInput font-poppins text-white font-bold text-xs'>Name</label>
              <input 
                type="text" 
                value={name} onChange={e => setName(e.target.value)} 
                className='flex bg-[#1C1C1C] p-[1vh] border-[1.2px] border-[#4F4F4F] rounded-[6px] w-[24vw] text-white font-poppins font-medium mt-1'/>
              {errorMessage.name &&
                <div className='errorMessage'>{errorMessage.name.join(', ')}</div>
              }
            </div>

            <div className='mt-5 ml-[6em]'>
              <label className='labelInput font-poppins text-white font-bold text-xs'>Email</label>
              <input 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className='flex bg-[#1C1C1C] p-[1vh] border-[1.2px] border-[#4F4F4F] rounded-[6px] w-[24vw] text-white font-poppins font-medium mt-1'/>
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
            </div>

            <div className='mt-5 ml-[6em]'>
              <label className='labelInput font-poppins text-white font-bold text-xs'>Confirmé le mot de passe</label>
              <div className='relative'>
                <input
                  type={showPasswordConfirmation ? 'text' : 'password'}
                  value={password_confirmation}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className='flex bg-[#1C1C1C] p-[1vh] border-[1.2px] border-[#4F4F4F] rounded-[6px] w-[24vw] text-white font-poppins font-medium mt-1'
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showPasswordConfirmation)}
                  className='absolute inset-y-0 right-0 flex items-center px-2 text-white'
                >
                  {showPasswordConfirmation ? 'Hide' : 'Show'}
                </button>
              </div>
              {errorMessage.password_confirmation && 
                <div className='errorMessage'>{errorMessage.password_confirmation.join(', ')}</div>
              }
            </div>

          <button type="button" 
            value="Submit" 
            onClick={handleClick} 
            className='flex  mt-8 ml-[14.6vw] bg-[#1C1C1C] p-[2vh] border border-[#FFA800] text-[#FFA800] rounded-[6px] '> S'inscrire</button>
          <br/>

          <a href="/login" className=' mt-3 font-poppins text-sm font-extrabold text-gris_F1F1F1 ml-[11em]'>
            j'ai déjà un compte
            <span className='text-orange_FFA800'>.</span>
            <span className='meconnecter font-poppins text-orange_FFA800 underline'>me connecter</span>
          </a>

          <button onClick={() => setIsModalOpen(false)}></button>
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
