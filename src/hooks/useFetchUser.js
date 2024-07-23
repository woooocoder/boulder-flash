import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useFetchUser = () => {
    const navigate = useNavigate();  
    const [user, setUser] = useState({});
    const token = localStorage.getItem('accessToken');

    const fetchSessions = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:5050/api/v/user', {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                navigate('/error/403');
                throw new Error('Failed to fetch sessions');
            }

            const data = await response.json();
            setUser(data);
            localStorage.setItem('name', data.name); 
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }, [token, navigate]);  

    useEffect(() => {
        fetchSessions();
    }, [fetchSessions]);

    return { user, setUser, token };
};

export default useFetchUser;
