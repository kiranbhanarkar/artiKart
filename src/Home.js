import React from 'react';
import './Home.css';
import Product from './Product';
import add from './img/add.jpg'
import Form from './Form';

import { useStateValue } from './ContextProvider';


function Home() {
 
  const [{ form , user}, dispatch] = useStateValue();
  
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='add-img' 
             src={add}
              alt='add' />
              <h1>New Arrivals</h1>
            <div className='home-row'>
              
                <Product title='Digital Art, abstract, Contemporary art, abstract art, 24x36 art'
                price={620} image='https://i.etsystatic.com/33029693/r/il/a9e8ff/4058742721/il_794xN.4058742721_jv5z.jpg' 
                rating={5}/>
                <Product title='Thomas Shelby - Peaky Blinders - Portait Statue 26 cm'
                price={8317} image='https://i.etsystatic.com/40113052/r/il/3e6539/4492077060/il_794xN.4492077060_8n1h.jpg' 
                rating={4}/>
            </div>  
            <h1>Best Sellers</h1>
            <div className='home-row'>
               <Product title='Clock | Wall Clock | Automotive Decor | Clutch Pressure Plate | Garage | Mancave | gunmetal | Industrial | Gift for him | Free Shipping'
                price={4402} image='https://i.etsystatic.com/23864260/r/il/b6407c/2792975601/il_794xN.2792975601_2i55.jpg' 
                rating={4}/>
                <Product title='Brownfolds DIY Paper Wall Trophy; Origami Deer Head Wall Decor Art Piece; Pre-cut and Scored Paper Templates'
                price={638} image='https://i.etsystatic.com/16676438/r/il/55aac5/1476320786/il_794xN.1476320786_8hkr.jpg' 
                rating={5}/>
                <Product title='Cute Mushroom Lamp for Mushroom Lovers- Wooden Mushroom Lamp, Night Light, Bedroom Lights, Mushroom Gifts, Little Mushroom Light, Cute Light'
                price={3873} image='https://i.etsystatic.com/37079027/r/il/a2c04e/4755690767/il_794xN.4755690767_9cl2.jpg' 
                rating={5}/>
            </div>  
            <div className='home-row'>
            <Product title='Handcrafted Rose Wood Domino Box NZ DECORS'
                price={3827} image='https://i.etsystatic.com/23174932/r/il/837347/2348965425/il_794xN.2348965425_3w3s.jpg' 
                rating={3}/>
             {form.map(item => (
              <Product
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
             ))}    
            </div>
            
        </div>

    </div>
  )
}

export default Home