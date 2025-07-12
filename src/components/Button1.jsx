import img1 from "./../assets/images/img-11.jpg";
import img2 from "./../assets/images/img-22.jpg";
import img3 from "./../assets/images/img-33.jpg";
import profile1 from "./../assets/images/profile1.jpg";
import profile2 from "./../assets/images/profile2.jpg";
import profile3 from "./../assets/images/profile3.jpg";


function Button1() {

  return (
    <>
      <div className="faq121">
        <div className="faq12-11">
          <div><img src={img1} className="img-11" /></div>
          <div><img src={img2} className="img-22" /></div>
          <div ><img src={img3} className="img-33" /></div>
        </div>
        <div className="faq12-2">
          <div>
            <img src={profile1} className="profile-1" />
          </div>
          <div>
            <img src={profile2} className="profile-2" />
          </div>
          <div>
            <img src={profile3} className="profile-3" />
          </div>

        </div>
      </div>
    </>
  )
}
export default Button1;