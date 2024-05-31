import React, { useState } from 'react';
import RegisterForm from '../../components/forms/RegisterForm/RegisterForm';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import PageTailwind from '../../components/forms/PageTailwind';


function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');

    return (
        <div>
            <PageTailwind />
            <h2 className='text-orange-400 text-2xl'>Bonjour Synapse</h2>
            <RegisterForm />
            <br/>
            <LoginForm />
            <br/>
            
        </div>
    );
};

export default HomePage;