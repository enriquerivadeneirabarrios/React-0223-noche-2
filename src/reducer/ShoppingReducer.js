import { TYPES } from "../actions/ShoppingActions";

export const shoppingInitialState = {       //el estado inicial es la base de datos de productos, en un objeto, y el carrito en otro objeto vacio
    products : [
        {
          id: 1 ,
          img: "https://img.freepik.com/fotos-premium/aguacate-aislado-blanco_62856-4854.jpg",
          title: "Palta",
          precio: 2590,
        },
        {
          id: 2,
          img: "https://cdnx.jumpseller.com/newen-verde1/image/33398731/resize/1280/1280?1679678128",
          title: "Tomate",
          precio: 679,
        },
        {
          id: 3,
          img: "https://www.novaplaza.com.pe/wp-content/uploads/2023/02/Mesa-de-trabajo-2-11.jpg",
          title: "Uva",
          precio: 663,
      
        },
        {
          id: 4,
          img: "https://mlcvkocrfpoo.i.optimole.com/w:1200/h:1200/q:mauto/rt:fill/g:ce/el:1/f:avif/https://www.ecooperativas.com/wp-content/uploads/2021/02/naranja-de-campo.jpg",
          title: "Naranja",
          precio: 700,
          
      
        },
        {
          id: 5,
          img: "https://tofuu.getjusto.com/orioneat-prod/jvkzb3y6tvAJcf7Dq-H-Oregano-Albahaca.png",
          title: "Pan",
          precio: 450,
      
        },
      ],

    cart: [ ],

    subtotals: [ ],

    cartPrice: [],
}

export function shoppingReducer (state , action) {
    switch (action.type) {
        case TYPES.READ_STATE : {
            return {
                ...state,
                Db: action.payload[0],
                cart: action.payload[1]
            }
        }
        case TYPES.ADD_TO_CART : {
            let newItem = state.products.find( (product) => product.id === action.payload); //newItem es igual a comparar si en la lista de productos hay alguno que coincida con el id del boton apretado

            let itemInCart = state.cart.find ( (item) => item.id === newItem.id);        //itemInCart es igual a comparar si el id de los productos del carrito coincide con newItem
            console.log(newItem);
            console.log(itemInCart);
            
            return itemInCart       
            ? {                                     //si el find encuentra algo, hace esto
                ...state,
                cart: state.cart.map((item) =>      //va a mapear todos los elementos del carrito, pero va a comparar si el id del elemento coincide con el de newItem
                    item.id === newItem.id
                    ? { ...item , quantity: item.quantity + 1, subtotal: item.precio * (item.quantity + 1) }  //si coincide, mapea el item y suma uno a quantity
                    : item                                      //si no coinicde, mapea item sin cambios
                    ),
               // subtotals: 
                }
            :{                                     //si el find no encuentra nada, hace esto
                ...state,       //guardar una copia del estado
                cart : [...state.cart , {...newItem, quantity: 1 , subtotal: newItem.precio }],
                //subtotals: [...state.subtotals,]
            
        }; 
        
    }
        case TYPES.REMOVE_ONE_PRODUCT: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload) ;

            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload
                ? { ...item, quantity: item.quantity - 1, subtotal: item.precio * (item.quantity - 1)}
                : item
                ),
            }
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        }
        case TYPES.REMOVE_ALL_PRODUCTS : {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART : {
            return shoppingInitialState;
        }
        default:            
        return state;
    } 
}

