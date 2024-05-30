import { useState, useEffect, useCallback } from "react";

const useFetchUser = () => {
    const [sessions, setSessions] = useState([]);
    const id = '66218395053c6a12f1868516';

    const fetchSessions = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5050/api/user/${id}/getsessions`);
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

export default useFetchUser;
