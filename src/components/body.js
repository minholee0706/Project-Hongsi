import React from "react";
import './CSS/body.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HongSi_img1 from './IMG/Hongsi1.jpg';
import HongSi_img2 from './IMG/Hongsi2.jpg';
import HongSi_img3 from './IMG/Hongsi3.jpg';

const Body=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        aytoplaySpeed : 2000,
        centerMode : true,
        centerPadding : -450
      };
 
  

    return(
        <div className="Body_All">
        <Slider {...settings} >
          <div className="Body_slide">
            <h3><img className="Body_img3" src={HongSi_img3} /></h3>
          </div>  
          <div>
            <h3><img className="Body_img2" src={HongSi_img2} /></h3>
          </div>
          <div>
            <h3><img className="Body_img1" src={HongSi_img1} /></h3>
          </div>
        </Slider>
        <div className="Body_about">
            <div className="Body_about_div">
                <h1>HONGSI는</h1>
                <h5>자신의 반려동물의 사진을 게시하고 Ethereum으로 판매, 구입하여</h5>
                <h5>반려인들과 소통하고 자랑할 수 있는 공간을 만드는 프로젝트입니다.</h5>
            </div>
            <div className="Body_about_div">
                <h1>HONGSI는</h1>
                <h5>실제 상업 목적이 아닌 공부 목적의 프로젝트입니다.</h5>
            </div>

            
        </div>
      
      </div>


    )
}

export default Body;