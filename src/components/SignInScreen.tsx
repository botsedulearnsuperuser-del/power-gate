import React from 'react';
import { FullScreenSignup } from './ui/full-screen-signup';

interface SignInScreenProps {
    onLogin: () => void;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ onLogin }) => {
    return (
        <FullScreenSignup onLogin={onLogin} />
    );
};

export default SignInScreen;
