class Session {
    constructor(id, date, startTime, endTime, climbs) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.climbs = climbs;
    }
    
    // date() { return this.date }
    // startTime() { return this.startTime }
    // endTime() { return this.endTime }
    climbs() { return this.climbs }
    
    numCompleted() {
        let j = 0
        for (let i = 0; i < this.climbs.length; i++) {
            if (this.climbs[i].completed) j++
        }
        return j
    }
    numFailed() {
        let j = 0
        for (let i = 0; i < this.climbs.length; i++) {
            if (!this.climbs[i].completed) j++
        }
        return j
    }
    
    
}

export default Session
