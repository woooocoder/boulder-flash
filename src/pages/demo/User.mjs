// class User {
//     _id: number,
//     username: string,
//     Session: {
//         _id: number,
//         date: Date,
//         session_time: Date,
//         completed_climbs: number,
//         failed_climbs: number,

//         Climb: {
//             _id: number,
//             completed: boolean,
//             video: File,
//             gym_difficulty: number,
//             time_to_complete: Date,
//             description: string,
//         }


//     }
// }

class User {
    constructor(id, username, email, sessions) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.sessions = sessions;
        
    }

    // name() { return name }
    username() { return this.username }
    email() { return this.email }
    sessions() { 
        if (this.sessions) return this.sessions
        return "You have 0 recorded sessions"
    } 
    addSession(session) { this.sessions.add(session) }
}

export default User