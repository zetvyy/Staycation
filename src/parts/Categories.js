import Button from "components/Button/Button";
import React from "react";
import Fade from "react-reveal/Fade";

const Categories = ({ data }) => {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col align-items-center">
                There is no property in this category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade bottom>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">choices</span>
                        </div>
                      )}

                      <figure className="img-wrapper" style={{ height: 150 }}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="streched-link d-block text-gray-900"
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
            })
          )}
        </div>
      </section>
    );
  });
};

export default Categories;
