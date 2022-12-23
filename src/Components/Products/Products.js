
import { useState, useEffect } from 'react';
import './Products.css';



function Products(props) {
  const {cat,addToCart,addToFavorites} = props

  const[prod, setProduct]=useState([])
  


  useEffect(() => {
      let url = "https://fakestoreapi.com/products";
       if(cat!==''){
        url +="/category/"+ cat
       }
    fetch(url)
      .then((res) => res.json())
      .then((res) => {setProduct(res);
            //  console.log(res)
      })     
  }, [cat]);

function convertRating(percent){
  return (percent / 5 ) * 100;
  
}
   
function decimleCutter(proPrice){

    let price = Math.trunc(proPrice) 

   return price
  
}


function decimalPrint(proPrice){

  let decimal = proPrice.toString().split('.')
      decimal= decimal[1]
  
  return decimal
}

            



  return (
    <div className='page-container'>
            {prod.length>0?prod.map((card,index)=>{
                return(<div className='product-card' key={index}>
                      <div className='favorites-div' >
                      <svg onClick={()=>addToFavorites(card)} xmlns="http://www.w3.org/2000/svg" className="_1l0elc" width="18" height="18" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill={`${props.Favorit.includes(card)?'red':'currentColor'}`} className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
                            
                      </div>

                        <div className='product-image-container'>
                              <img className='pro-image' src={card.image} alt='product'/>
                        </div>

                        <div className='product-details'> 
                              <p className='product-title'><b>Brand, </b><span>{card.title}</span></p>
                                  <span>
                                      <div className="star-rating" title={convertRating(card.rating.rate)+"%"}>
                                        <div className="back-stars">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            
                                            <div className="front-stars" style={{width: `${convertRating(card.rating.rate)}%`}}>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                  
                                        </div> &nbsp;

                                            <span>{`(${(card.rating.count)})`}</span>
                                    </div>

                              </span> 


                              <div className='price-tag'><span>$&nbsp;</span>{decimleCutter(card.price)}<span>&nbsp;{decimalPrint(card.price)}</span></div>

                              <button className={` ${props.cart.includes(card)?'addtocart Added-class':'addtocart'}`} onClick={()=>addToCart(card)} >{props.cart.includes(card)?<div><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" class="bi bi-cart-x-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
</svg> &nbsp;</span>Remove from Cart</div>:<div><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg> &nbsp;</span>Add to Cart</div>}</button>


                        </div>

                        

               </div>)}):''}
       
        
    </div>
  );
}

export default Products;