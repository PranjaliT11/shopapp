import React, {useState } from 'react';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Header from  './Components/Header/Header';
import Favorites from './Components/Favorites/Favorites';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import {Routes,Route } from 'react-router-dom';



function LayOut() {

    const [Favorit,setFavorites] = useState([]);
    const [cart,setCart] = useState([]);
    // const [heart, setHeart] = useState(false);
    
    function addToCart(params){
       
      

          let addedItem = cart
          if(addedItem.includes(params)){
            addedItem.splice(addedItem.indexOf(params),1)
          }else{
            addedItem.push(params)
          }
          setCart([...addedItem])
          
    }

   
    
    function addToFavorites(params){
       
          let favprod = Favorit
          if(favprod.includes(params)){
            favprod.splice(favprod.indexOf(params),1)
          }else{
            favprod.push(params)
          }
          setFavorites([...favprod])
          
          // setHeart(heart)
    }

   return(
    <>
    <Header count={cart.length}/>
    
    <Routes>
    <Route path='/' element={ <Products cat={''} addToCart={addToCart} cart={cart} Favorit={Favorit} addToFavorites={addToFavorites} /> }></Route>
    <Route path='/electronics' element={ <Products cat={'electronics'} addToCart={addToCart} cart={cart} Favorit={Favorit} addToFavorites={addToFavorites} />}></Route>
    <Route path='/jawelery' element={ <Products cat={'jewelery'} addToCart={addToCart} cart={cart} Favorit={Favorit} addToFavorites={addToFavorites} />}></Route>
    <Route path='/menclothing' element={ <Products cat={"men's clothing"} addToCart={addToCart} cart={cart} Favorit={Favorit} addToFavorites={addToFavorites} />}></Route>
    <Route path='/womenclothing' element={ <Products cat={"women's clothing"} addToCart={addToCart} cart={cart} Favorit={Favorit} addToFavorites={addToFavorites} />}></Route>
    
    <Route path='/signup' element={<SignUp />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} />}></Route>
    <Route path='/favorites' element={< Favorites Favorit={Favorit} cart={cart}  addToFavorites={addToFavorites} addToCart={addToCart} />}></Route>

    
    </Routes>
    </>
   )
}

export default  LayOut