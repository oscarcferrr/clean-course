(()=>{

    //Aplicando el principio de responsabilidad única
    //Priorizar la composición frente a la herencia

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
        email:     string;
        role:      string;

    }

    class User {
        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor({email,role}: UserProps){

            this.lastAccess = new Date();
            this.email      = email;
            this.role    =  role;
        }

        checkCredentials(){
            return true;
        }
    };  

    interface SettingProps{ 
            lastOpenFolder:   string;
            workingDirectory: string;

    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            } : SettingProps ){

        
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
        interface UsertSettingsProps{ 
            birthdate:        Date;  
            email:            string;
            gender:           Gender;
            lastOpenFolder:   string;
            name:             string;
            role:             string;
            workingDirectory: string;

    }

    class UsertSettings{
        public person:   Person;
        public user:     User;
        public settings: Settings;

        constructor({name,gender, birthdate,
                    email,role,
                    lastOpenFolder, workingDirectory} : UsertSettingsProps){
        this.person = new Person({name,gender, birthdate});
        this.user = new User({ email,role});
        this.settings =  new Settings({lastOpenFolder, workingDirectory})

        }
    }

    const usertSetting = new UsertSettings({
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