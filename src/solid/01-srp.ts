(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class Mailer{
        private masterEmial: string = 'oscar@gmail.com.mx'

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins'){
            console.log('Enviando correo a los clientes', template);
        }
    }

    class ProductService{

        getProduct(id:number){
            console.log('Priducto',{id, name: 'Oled TV'});
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService,  mailer: Mailer){
            this.productService = productService;
            this.mailer =  mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['oscar@gmail.com'],'to-clients');
        }
    
    }

    class CartBloc {

        addToCart(productId:number){
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }
    
    const productService = new ProductService();
    const mail = new Mailer();


    const productBloc = new ProductBloc(productService, mail);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();