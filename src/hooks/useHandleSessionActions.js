import { useState } from "react";
import { bestClimb } from "../utils/bestClimbUtils"
const useHandleSessionActions = (sessions, setSessions) => {
    const id = '66218395053c6a12f1868516';
    const [selectedSessionId, setSelectedSessionId] = useState(null);
    const [editedSessionId, setEditedSessionId] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [filterOption, setFilterOption] = useState(null);

    const handleDeleteSession = (sessionId) => {
        fetch(`http://localhost:5050/api/user/${id}/session/${sessionId}`, {
            method: 'DELETE'
        })
        .then(() => {
            setSessions(sessions.filter(session => session._id !== sessionId))
        })
        .catch(e => console.error('couldnt delete session', e))
    };

    const openPopup = (sessionId) => {
        setSelectedSessionId(sessionId);
    };

    const closePopup = () => {
        setSelectedSessionId(null);
    };

    const openEdit = (sessionId) => {
        setEditedSessionId(sessionId);
    };

    const closeEdit = () => {
        setEditedSessionId(null);
    };

    const handleSaveSession = (editedSession) => {
        fetch(`http://localhost:5050/api/user/${id}/session/${editedSessionId}`, {
            method: 'PATCH',
            body: JSON.stringify(editedSession),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            closeEdit();
        })
        .catch(error => console.error('error saving session edits', error))
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleFilterChange = (option) => {
        setFilterOption(option);
        handleToggle(); 
    };

    const filteredSessions = () => {
        switch (filterOption) {
            case "dateOldToNew":
                return sessions.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
            case "dateNewToOld":
                return sessions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            case "bestClimb":
                return sessions.slice().sort((a, b) => bestClimb(b) - bestClimb(a));
            default:
                return sessions;
        }
    };

    return {
        selectedSessionId,
        editedSessionId,
        toggle,
        filterOption,
        openPopup,
        closePopup,
        openEdit,
        closeEdit,
        handleSaveSession,
        handleDeleteSession,
        handleToggle,
        handleFilterChange,
        filteredSessions,
    };
};

export default useHandleSessionActions;
