

class Serie {
    constructor(name) {

        this.name = name;
        this.id = new Date().toISOString(); 
        this.startTime = null; 
        this.endTime = null; 

    }
}
module.exports = Serie;

    