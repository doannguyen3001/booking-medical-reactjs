import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";

import Slider from "react-slick";
// Import css files

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty ">
        <div className="container">
          <div className="section-container">
            <div className="section-header">
              <span className="title-section">Chuyên khoa</span>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image section-specialty" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Cơ xương khớp 1
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image section-specialty" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Cơ xương khớp 2
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image section-specialty" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Cơ xương khớp 3
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image section-specialty" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Cơ xương khớp 4
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image section-specialty" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Cơ xương khớp 5
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image section-specialty" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Cơ xương khớp 6
                      </span>
                    </div>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
