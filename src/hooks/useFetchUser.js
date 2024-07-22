// import { useState, useEffect, useCallback } from "react";
/*
const useFetchUser = () => {
    const [sessions, setSessions] = useState([]);
    // const id = '66218395053c6a12f1868516';
    const id = '6685e449ee032a18b540da11s'
    const fetchSessions = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5050/api/user/${id}/getsessions`);
            // const response = await fetch('http://localhost:5050/api/home',
            //     {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Accept': 'application/json',
            //         },
            //         method: 'GET',
            //         body: {
            //             id: id
            //         }
            //     }
            // )
            const sessionData = await response.json();
            setSessions(sessionData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchSessions();
    }, [fetchSessions]);

    return { sessions, setSessions, id };
};
*/
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate()
const useFetchUser = () => {
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
                navigate('/error/403')
                throw new Error('Failed to fetch sessions');
            }

            const data = await response.json();
            setUser(data);
            localStorage.setItem('name', user.name)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }, [token]);

    useEffect(() => {
        fetchSessions();
    }, [fetchSessions]);
    

    return { user, setUser, token };
};

export default useFetchUser;
