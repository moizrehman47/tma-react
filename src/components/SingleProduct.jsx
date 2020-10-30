import React from "react";

const SingleProduct = (props) => {
  return (
    <div className="main-wrapper">
      <div className="container main-section single-product">
        <h2>Product</h2>
        <hr />
        <div className="item">
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                src={props.location.image}
                class="img-fluid"
                alt="image1"
              ></img>
            </div>
            <div className="col-12 col-md-8 d-flex flex-column col-details">
              <h3>{props.location.name}</h3>
              <p>
                <span className="list-heading">Dimension:</span>{" "}
                {props.location.dimension}
              </p>
              <p>{props.location.description}</p>

              <p>
                <span className="list-heading">Author:</span> "
                <span className="list-text">{props.location.author}"</span>{" "}
              </p>
              <p>
                <span className="list-heading">Publication:</span>{" "}
                <span className="list-text">
                  "{props.location.publication}"
                </span>
              </p>

              <div className="row mt-auto">
                <div className="col-auto">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  {props.location.location}
                </div>
                <div className="col-auto">
                  <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
                  {props.location.year}
                </div>
                <div className="col-auto">
                  <i class="fa fa-hashtag" aria-hidden="true"></i>{" "}
                  {props.location.vase_num}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
