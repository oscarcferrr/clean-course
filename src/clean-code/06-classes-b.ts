(()=>{

    //No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    interface PersonProps {
         birthdate: Date;
         gender: Gender;
         name: string;

    }

    class Person {

         birthdate: Date;
         gender: Gender;
         name: string;

        constructor ({name,gender, birthdate} : PersonProps ){
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    }

    interface UserProps{
        birthdate: Date;
        email:     string;
        gender:    Gender;
        name:      string;
        role:      string;

    }

    class User extends Person{
        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor({birthdate,email, gender, name, role}: UserProps){
            super({name, gender, birthdate})
            this.lastAccess = new Date();
            this.email      = email;
            this.role    =  role;
        }

        checkCredentials(){
            return true;
        }
    };  
    interface UsertSettingProps{ 
            birthdate:        Date;  
            email:            string;
            gender:           Gender;
            lastOpenFolder:   string;
            name:             string;
            role:             string;
            workingDirectory: string;

    }

    class UsertSetting extends User{

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate} : UsertSettingProps ){

            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const usertSetting = new UsertSetting({
        birthdate: new Date('1991-07-28'),
        email: 'fernando@gmail.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando Verduzco',
        role: 'admin',
        workingDirectory: 'usr/home',
    });
        console.log({usertSetting});

})();