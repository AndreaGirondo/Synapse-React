import React, { useState } from 'react';
import RegisterForm from '../../components/forms/RegisterForm/RegisterForm';
import LoginForm from '../../components/forms/LoginForm/LoginForm';


function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');

    return (
        <div>
            <h2 className='text-orange-400 text-2xl'>Bonjour Synapse</h2>
            <RegisterForm />
            <br/>
            <LoginForm />

            <div>
                <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} name={name} setName={setName}/>
            </div>
        </div>
    );
};

export default HomePage;