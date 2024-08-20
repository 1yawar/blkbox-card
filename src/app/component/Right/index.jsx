import Image from "next/image";
import Img1 from "../../../assert/rightimg.png";
import "./right.css";
function Right() {
  return (
<>
    <div className="right-container">
        <div className="right-img-section">
            <div className="img-container">
                <Image src={Img1} className="img1" />
            </div>
            <div className="Edition">
                <p className="Edition-para">Edition 20</p>
            </div>
        </div>

        <div className="right-content-section">
            <h1 className="heading">ShutEye</h1>
            <p className="para">
                ShutEye is designed to enhance users' sleep experience by monitoring
                and analyzing sleep patterns, while also providing soothing sleep
                sounds and stories for a restful night's sleep.
            </p>

            <div className="ua_strategy">
                <p className="ua_strategy-para">UA Strategy</p>
            </div>
        </div>

        <div className="right-end">
            <p className="right-end-para1">Mar 06, 2024</p>
            <p className="right-end-para2"><span className="right-end-para1">Genre:</span> <span className="right-end-para2-span">Health & Fitness</span></p>
        </div>
     </div>
</>
  );
}

export default Right;
