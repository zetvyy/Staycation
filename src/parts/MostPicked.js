import Button from "components/Button/Button";
import React from "react";
import Fade from "react-reveal/Fade";

const MostPicked = (props) => {
  return (
    <section className="container align-items-center" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
              key={`mostpicked-${index}`}
            >
              <Fade bottom>
                <div className="card card-featured">
                  <div className="tag">
                    {item.price}
                    <span className="font-weight-light "> per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="streched-link d-block text-white"
                      href={`/properties/${item._id}`}
                    >
                      {item.name}
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPicked;
