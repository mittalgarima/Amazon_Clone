import React from 'react'
import background from './background.jpg'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div class="home">
           <img className="home_image" src={background} alt="img"/>
          
          <div className="home_row">

          <Product 
          id="123423"
          title="Styles for Men | Up to 70% off"
         price={11.96}
         rating={5}
         image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/2._SY116_CB656503003_.jpg"/>
      
      
      
       <Product 
          id="123423"
          title="Digital thermometers "
         price={11.96}
         rating={5}
         image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpgg"/>
       
         </div>


       <div className="home_row">
       <Product 
          id="123423"
          title="Explore top rated electronics & accessories"
         price={11.96}
         rating={5}
         image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Dashboard/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB655816069_.jpg"/>
     
       <Product 
          id="123423"
          title="Masks and faceshields"
         price={11.96}
         rating={5}
         image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS/PC_CC/BISS_260x2601._SY304_CB669949363_.jpg"/>
           
            <Product 
          id="123"
          title="Food & beverages"
         price={11.96}
         rating={5}
         image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GWGraphics/Desktop-Qc-1-1x._SY116_CB669420330_.png"/>
      
      
       
          </div>



          
          <div className="home_row">
       
          <Product className="last_image"
          id="123423"
          title="The learn Startup:How constant Innovation Creates"
         price={11.96}
         rating={5}
         image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"/>


          </div>
       
       
        </div>
    )
}

export default Home
