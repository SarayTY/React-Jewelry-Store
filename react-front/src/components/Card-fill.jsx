import { Link } from "react-router-dom";

const CardFill = ({title , img , description , linkBtn}) => {
    return (
        <>
            <div className="col col-lg-6 col-md-4 col-xs-12 p-2">
              <img
                 src={img} alt={title}
              />
              <h4>{title}</h4>
              <p className="text-center">
                {description}
              </p>
              <Link to="/products" className="btn link-button" >
                  {linkBtn}
              </Link>
            </div>
         
          </>
    )

}

export default CardFill;