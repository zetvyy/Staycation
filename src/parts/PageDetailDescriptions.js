import React from "react";
import ReactHtmlParser from "react-html-parser";

const PageDetailDescriptions = ({ data }) => {
  return (
    <main>
      <h4>About the Place</h4>
      {ReactHtmlParser(data.description)};
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.length === 0
          ? "Tidak ada feature"
          : data.features.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    src={feature.imageUrl}
                    alt={feature.name}
                    className="d-block"
                  />
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
};

export default PageDetailDescriptions;
