import Star from "components/Star";
import React from "react";
import TestimonialAccents from "../assets/images/testimonial-landingpages-frame.jpg";
import Button from "components/Button/Button";

const Testimony = ({ data }) => {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonialAccents}
              alt="Testimonial"
              className="position-absolute"
              style={{ margin: `-30px 0 0 -30px` }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <br />
          <Button
            className="btn px-5"
            style={{ marginTop: `50px` }}
            hasShadow
            isPrimary
            type="link"
            href={`/testimonial/${data._id}`}
          >
            Read Their Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
