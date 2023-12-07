import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";

import ItemDetails from "../json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescriptions from "parts/PageDetailDescriptions";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { Fade } from "react-reveal";

class DetailPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <Fade bottom>
              <div className="col-7 pr-5">
                <PageDetailDescriptions data={ItemDetails} />
              </div>
            </Fade>
            <Fade left>
              <div className="col">
                <BookingForm itemDetails={ItemDetails} />
              </div>
            </Fade>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default DetailPage;
