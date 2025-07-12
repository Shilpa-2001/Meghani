import Nav from "./../pages/Nav";
import whatapp from "./../assets/images/whatapp.png"
import upload from "./../assets/images/Upload_icon.png"


function Listproperty3() {

  return (
    <>
      <div className="lists11-1">
        {/* <Nav /> */}
        <div className="lists1-11">
          <div className="lists-12">
            <p><span>3</span> of 4 steps completed</p>
            <progress id="file" value="0" max="100"></progress>
            <progress id="file1" value="0" max="100"></progress>
            <progress id="file2" value="100" max="100" ></progress>
            <progress id="file3" value="0" max="100" ></progress>
          </div>
          <div className="lists3-1">
            <h2>Owner ID Verification</h2>
            <div className="lists3-2">
              <img src={upload} />
              <h4>Drag & drop files or <span>Browse</span></h4>
              <p>Upload Your Aadhar Card</p>
            </div>
            <div className="lists3-3">
              <label htmlFor="">Uploading</label>
              <input type="text" placeholder="your-file-here.PDF" /><br />
              <label htmlFor="">Uploaded</label>
              <input type="text" placeholder="image-name-goes-here.png" />
              <input type="submit" value="CONTINUE" className="btn-continue" />
            </div>

          </div>
          <div className='whatapp-logo1'>
            <img src={whatapp} className="logo" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Listproperty3;
