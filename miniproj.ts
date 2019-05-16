class students{
    name: string;
    age: number;
    gender: string;
    nationality: string;
    constructor(){
        this.gender = 'female';
    }
    getNationality(): string {
        return this.nationality;
    }

}
class undergraduates extends students implements iundergrad{

    batch: number;
    gpa: number;
    constructor(batch:number)
    {super();
        this.batch=batch
    }
}

interface iundergrad{
    name: string;
    age: number;
    gender: string;
    nationality: string;
    gpa: number;
}

var student1 = new undergraduates(2019)
student1.nationality ="us"
student1.getNationality()

console.log ("the nationality is " + student1.batch)
