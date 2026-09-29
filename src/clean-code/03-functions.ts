(() => {

    // función para obtener información de una película por Id
    //bad
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }
    //good
     function getMovieById( movieId: string ) {
        console.log({ movieId });
    }


    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    //bad
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }

    //good
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    

    // funcion para obtener el bio del actor por el id
    //bad
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }

    // funcion para obtener el bio del actor por el id
    //good
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }

    
    // Crear una película
    //bad
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }
    //good
    function createMovie({title, description, rating, cast} : Movie) {
        console.log({ title, description, rating, cast });
    }

    interface Movie {
        description: string;
        cast:        string[];
        title:       string;
        rating:      number;
        
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

     function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    interface Movie {
        movidId: number;
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }


    // Continuar
    //bad
    const getPayAmountt = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    //good
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead ) {
            return 1500;
        } 
        
        if ( isSeparated ) {
            return 2500;
        } 

        return (isRetired) ? 3000 : 4000;
          
 
    }

    


})();




