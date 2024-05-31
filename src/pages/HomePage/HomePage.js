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
        </div>
    );
};

export default HomePage;