(() => {

    // arreglo de temperaturas celsius
    //bad
    const arrayOfNums = [33.6, 12.34];
    //good
     const temperaturesCelsius = [33.6, 12.34];
    // Dirección ip del servidor
    //bad
    const ip = '123.123.123.123';
    //good
    const serveIp= '123.123.123.123';

    // Listado de usuarios
    //bad
    const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    //good
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const userEmails = users.map( user => user.email );

    // Variables booleanas de un video juego
    //bad
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;

    //good
    const isJumping = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    //bad
    const start = new Date().getTime();
    //good
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    //bad
    const end = new Date().getTime() - start;
    //good
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    //bad
    function book() {
        throw new Error('Function not implemented.');
    }
    //good
    function getBooks() {
        throw new Error('Function not implemented.');
    }



    // obtiene libros desde un URL
    //bad
    function BooksUrl( u: string) {
        throw new Error('Function not implemented.');
    }

    //good
     function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    //bad
    function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.');
    }
    //good
    function getSquareArea ( side:number ){
        throw new Error('Function not implemented.');
    }
  

    // imprime el trabajo
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();




