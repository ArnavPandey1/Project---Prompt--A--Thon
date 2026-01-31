import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SignInCard } from '../components/ui/sign-in-card';

export default function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent, data: any) => {
        setIsLoading(true);
        // Simulate "API" call
        setTimeout(() => {
            login(data.email);
            navigate('/dashboard');
            setIsLoading(false);
        }, 1500);
    };

    return (
        <SignInCard mode="signup" onSubmit={handleSubmit} isLoading={isLoading} />
    );
}
