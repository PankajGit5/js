// import{cart} from '../data/cart.js';
export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity : 2
},
{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity : 2
}

];
export function addTocart(cartquant){
    let matchitem;
    cart.forEach(carTitem => {
    if( carTitem.productId  === cartquant)
    {
    matchitem = carTitem;
    }
    });
  
    if(matchitem){
    matchitem.quantitycart  += 1;
    }
  
    else{
        cart.push({
          cartquant: cartquant,
            quantitycart: 1
        });
    }
  }


  export function removefromCart(productId) {
    // Filter out the product that matches the given productId
    const updatedCart = cart.filter(cartItem => cartItem.productId !== productId);

    // Clear the existing cart array and push the updated items
    cart.length = 0; 
    cart.push(...updatedCart); 

    // console.log('Updated Cart:', cart); 
}