
import React from 'react';
import styles from "./Main.css";
import MyCarousel from './Carousel/Carousel';
import Celestron from './Celestron.jpg';
import Skywatcher from './Skywatcher.jpg';
import Maede from './Meade.jpg';
import William_Optics from './William-Optics.jpg';
import Taurus from './Taurus.jpg';




function Main()  {
    return (
        <div className="Main">
          <MyCarousel />
          <div className="Sections">
              <p>About Astroshop24</p>
          </div>
          <div className="Content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis ligula et lorem dignissim, quis iaculis neque facilisis. Pellentesque iaculis ante ut rhoncus maximus. Morbi laoreet risus sed libero placerat scelerisque. Maecenas aliquet augue a elit suscipit consectetur. Fusce ullamcorper quam vel metus bibendum tempus. Proin feugiat enim vitae tempus hendrerit. Donec et ante sem. Ut lobortis, nisi eget gravida fringilla, ipsum enim finibus nibh, quis elementum purus sapien vitae lorem. Suspendisse euismod risus ac tristique fermentum. Mauris sed scelerisque lacus, vel condimentum nisi.</p>
          </div>
          <div className="Sections">
              <p>Recommended articles for beginners</p>
          </div>
          <div className="Content">
              <p>asdawdawd</p>


          </div>
          <div className="Sections">
              <p>Top brands telescopes</p>
          </div>
          <div className="Content">
              <div className="Brand1">
              <img src={Celestron} alt="Celestron"/> 
              </div> 
              <div className="Brand2">       
              <img src={Skywatcher} alt="Celestron"/>
              </div>
              <div className="Brand3">       
              <img src={Maede} alt="Celestron"/>
              </div>
              <div className="Brand4">       
              <img src={William_Optics} alt="Celestron"/>
              </div>
              <div className="Brand5">       
              <img src={Taurus} alt="Celestron"/>
              </div>

          </div>
          <div className="Sections">
              <p>Top brands accessories</p>
          </div>
        </div>
        
    )
}


export default Main;