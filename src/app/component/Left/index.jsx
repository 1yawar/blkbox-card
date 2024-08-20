import Image from "next/image";
import img1 from "../../../assert/dollor_img.png";
import img2 from "../../../assert/tabler_chess-knight.png";
import img3 from "../../../assert/ph_trophy-bold.png";
import img4 from "../../../assert/mdi_feature-highlight.png";
import img5 from "../../../assert/creative-img.png";
import img6 from "../../../assert/share.svg";
import img7 from "../../../assert/eye.svg";
import img8 from "../../../assert/calender.svg";
import img9 from "../../../assert/eye2.png";
import img10 from "../../../assert/location.svg";
import img11 from "../../../assert/tag.svg";
import img12 from "../../../assert/colorswatch.svg";
import img13 from "../../../assert/black.svg";
import img14 from "../../../assert/darkblue.svg";
import img15 from "../../../assert/white.svg";
import img16 from "../../../assert/gray.svg";
import img17 from "../../../assert/purple.svg";
import img18 from "../../../assert/facebook.png";
import "./left.css";

function Left() {
  return (
    <>
      <div className="left-container">
        <div className="left-container-top">
          <h2 className="heading">Topics Covered:</h2>
          <div className="left-container-top-boxes">
            <div className="left-container-top-box">
              <div className="left-container-top-box-img">
                <Image src={img1} className="img-1" />
              </div>
              <h5 className="left-container-top-box-text">
                Monetization Strategy
              </h5>
            </div>
            <div className="left-container-top-box">
              <div className="left-container-top-box-img img-2">
                <Image src={img2} className="img-1 img2" />
              </div>
              <h5 className="left-container-top-box-text">
                User Aquisition Strategy
              </h5>
            </div>
            <div className="left-container-top-box">
              <div className="left-container-top-box-img img-3">
                <Image src={img3} className="img-1 img3" />
              </div>
              <h5 className="left-container-top-box-text">Top Creatives</h5>
            </div>
            <div className="left-container-top-box">
              <div className="left-container-top-box-img img-4">
                <Image src={img4} className="img-1 img4" />
              </div>
              <h5 className="left-container-top-box-text">Creative Strategy</h5>
            </div>
          </div>
        </div>
        <div className="left-container-bottom">
          <h2 className="left-container-bottom-heading">Creative Strategy:</h2>
          <div className="creative-section">
            <div className="creative-section-div">
              <div className="creative-section-img">
                <Image src={img5} className="img-5" />
              </div>
              <div className="creative-section-content">
                <div className="created-impression">
                    <div className="img-date">
                        <div className="img">
                            <Image
                                src={img8}
                                className="img_"
                            />
                        </div>
                        <div className="date">
                            <p>CREATED</p>
                            <h4>Nov 04, 2023</h4>
                        </div>
                    </div>
                    <div className="img-date">
                    <div className="img">
                            <Image
                                src={img9}
                                className="img_"
                            />
                        </div>
                        <div className="date">
                            <p>IMPRESSION</p>
                            <h4>2,136,438</h4>
                        </div>
                    </div>
                </div>
                <div className="IMPRESSIONS-BY-COUNTRY">
                    <div className="IMPRESSIONS-BY-COUNTRY-content">
                        <div className="img">
                            <Image
                                src={img10}
                                className="img_"
                            />
                        </div>
                        <div className="date">
                            <p>IMPRESSIONS BY COUNTRY</p>
                            <h4>USA: 40%, UK: 12%, Canada: 9%, France: 8%, Germany: 6%, Australia: 6%</h4>
                        </div>
                    </div>
                </div>

                <div className="IMPRESSIONS-BY-COUNTRY">
                    <div className="IMPRESSIONS-BY-COUNTRY-content">
                        <div className="img">
                            <Image
                                src={img11}
                                className="img_"
                            />
                        </div>
                        <div className="date">
                            <p>CREATIVE TAGS</p>
                            <div className="tags">
                                <div className="tag">
                                    <span>Head</span>
                                </div>
                                <div className="tag">
                                    <span>Face</span>
                                </div>
                                <div className="tag">
                                    <span>Person</span>
                                </div>
                                <div className="tag">
                                    <span>Adult</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="IMPRESSIONS-BY-COUNTRY colors-div">
                    <div className="IMPRESSIONS-BY-COUNTRY-content">
                        <div className="img">
                            <Image
                                src={img12}
                                className="img_"
                            />
                        </div>
                        <div className="date">
                            <p>COLORS</p>
                            <div className="colors">
                                <div className="color">
                                    <span className="span1">
                                        <Image
                                                src={img13}
                                        />
                                    </span>
                                    <span>#010001</span>
                                </div>
                                <div className="color">
                                    <span className="span1">
                                        <Image
                                                src={img14}
                                        />
                                    </span>
                                    <span>#171E74</span>
                                </div>
                                <div className="color">
                                    <span className="span1">
                                        <Image
                                                src={img15}
                                        />
                                    </span>
                                    <span>#FFFFFF</span>
                                </div>
                                <div className="color">
                                    <span className="span1">
                                        <Image
                                                src={img16}
                                        />
                                    </span>
                                    <span>#818081</span>
                                </div>
                                <div className="color">
                                    <span className="span1">
                                        <Image
                                                src={img17}
                                        />
                                    </span>
                                    <span>#48438E</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Monetization-Network">
                    <div>
                    <p>Monetization Network:</p>
                    </div>
                    <div className="Monetization-Network-img">
                        <Image
                            src={img18}
                            className="facebook"
                        />
                        <div className="fb100">
                            <span>100%</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="creative-section-btn">
              <button className="btn">
                <span>
                  <Image src={img6} />
                </span>
                <span>View</span>
              </button>
              <button className="btn">
                <span>
                  <Image src={img7} />
                </span>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left;
