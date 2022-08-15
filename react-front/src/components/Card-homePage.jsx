import React from "react";
import "../css/card-HomePage.css";
import CardFill from "./Card-fill";

const CardHomePage = () => {
  return (
    <>
      <div className="title">
        <h1>upcoming jewelry</h1>
        <div className="line"></div>
        <div className="row-line">

        <CardFill
          title={"Diamond Ring"}
          img={
            "https://image.brilliantearth.com/media/diamond_ring_vto/8T/BE1D64_white_Round_top_75_carat.png"
          }
          description={
            "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and Created by us, styled by you."
          }
          linkBtn={"Go shopping"}
        />
         <CardFill
          title={"Diamond Necklace"}
          img={
            "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6a0d1c05/images/hi-res/RGN626_RGN626_GN9278_Hero_1.jpg?sw=800&sh=800"
          }
          description={
            "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and Created by us, styled by you."
          }
          linkBtn={"Go shopping"}
        />
        <CardFill
          title={"Gold Diamond Earrings"}
          img={
            "https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISP0419S17_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-37601.png"
          }
          description={
            "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and Created by us, styled by you."
          }
          linkBtn={"Go shopping"}
        />
        <CardFill
          title={"A Moon Necklace"}
          img={
            "https://besembol.com/wp-content/uploads/2020/05/new_0000_20.jpg"
          }
          description={
            "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and Created by us, styled by you."
          }
          linkBtn={"Go shopping"}
        />
        </div>
        </div>
    </>
  );
};

export default CardHomePage;
