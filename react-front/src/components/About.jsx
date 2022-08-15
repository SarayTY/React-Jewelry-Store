import PageHeaderTitle from "./common/pageHeaderTitle";
import "../css/about.css";

const About = () => {
  return (
    <>
      <div className="container text-center">
        <PageHeaderTitle title="About Us" />
        <h5>A dream come true</h5>
        <div className="col-12">
          <hr />
          <p className="title-paragraph">
            At the beginning of our journey, we aspired to design luxury
            jewelry, to suit every pocket. The desire to fulfill every client
            idea , which will guarantee her a satisfaction and elegant design
            line, which maintains clean lines. At our website you can find
            necklaces, bracelets, rings and earrings.
          </p>
        </div>
      </div>

      <div className="about-page">
        <div className="container-fluid pt-4">
          <div className="aboutFirstRow row">
            <img
              className="img-fluid col-sm-8 col-md-5 "
              src="https://media.istockphoto.com/photos/earrings-with-emerald-picture-id1350815428?b=1&k=20&m=1350815428&s=170667a&w=0&h=cj_oaqUqW7x4gyRTMbbyJjVeKUlC9KHqWJthsA4mcB8="
              alt="green crystal earrings"
            />

            <div className="img-title col-md-6">
              MUSEUM OF JEWELRY
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                dolore ullam quis eaque nostrum debitis maxime quod, aliquid
                voluptatem nobis labore ex a alias optio animi nesciunt
                blanditiis reiciendis consequuntur et? Nobis culpa tempora modi.
                Vel consectetur ratione velit deleniti. In aperiam tempore
                fugiat similique repellendus enim sequi aliquam. Saepe!
              </p>
            </div>
          </div>

          <div className="aboutSecondRow row flex-md-row">
            <div className="img-title col-md-6">
              MUSEUM OF JEWELRY
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, ad totam quae tempore ex sed assumenda libero quidem
                cumque? Obcaecati sequi at a sapiente assumenda quas iste?
                Laudantium, non qui! Illo odit est nisi ad.
              </p>
            </div>

            <img
              className="img-fluid col-sm-8 col-md-5"
              src="https://image.brilliantearth.com/media/diamond_ring_vto/8T/BE1D64_white_Round_top_75_carat.png"
              alt="A diamond ring"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
