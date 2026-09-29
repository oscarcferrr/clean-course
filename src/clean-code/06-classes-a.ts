(()=>{

    //No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    class Person{

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor (name: string, gender: Gender, birthdate: Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    class User extends Person{
        public lastAccess: Date;
        
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UsertSetting extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder:   string,
            email:                   string,
            role:                    string,
            name:                    string,
            gender:                  Gender,
            birthdate:               Date,

        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const usertSetting = new UsertSetting(
        'usr/home',
        '/home',
        'fernando@gmail.com',
        'admin',
        'Fernando Verduzco',
        'M',
         new Date('1991-07-28')
    );
        console.log({usertSetting});

})();