import Nav from "./Nav";
import whatapp from "./../assets/images/whatapp.png"
import upload from "./../assets/images/Upload_icon.png"
import upload1 from "./../assets/images/upload1.png"

function Listproperty2() {

  return (
    <>
      <div className="lists1-1">
        {/* <Nav /> */}
        <div className="lists1-11">
          <div className="lists-12">
            <p><span>2</span> of 4 steps completed</p>
            <progress id="file" value="0" max="100"></progress>
            <progress id="file1" value="100" max="100"></progress>
            <progress id="file2" value="0" max="100" ></progress>
            <progress id="file3" value="0" max="100" ></progress>
          </div>
          <div className="lists2-1">
            <h2>Room & Facility Details:</h2>
            <div className="lists2-2">
              <img src={upload} />
              <h4>Drag & drop files or <span>Browse</span></h4>
              <p>Upload Stay Photos.</p>
            </div>
            <div className="lists2-3">
              <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1599 12.0951L8.68573 4.67515C8.50481 4.39213 8.25555 4.15921 7.96093 3.99786C7.6663 3.83652 7.3358 3.75195 6.9999 3.75195C6.66399 3.75195 6.33349 3.83652 6.03886 3.99786C5.74424 4.15921 5.49498 4.39213 5.31406 4.67515L0.839896 12.0951C0.681844 12.3586 0.595939 12.659 0.590819 12.9662C0.585699 13.2734 0.661544 13.5766 0.810729 13.8451C0.983209 14.1475 1.23286 14.3986 1.53418 14.5728C1.8355 14.747 2.17767 14.8381 2.52573 14.8368H11.4741C11.8198 14.8405 12.1605 14.7529 12.4616 14.5829C12.7627 14.4129 13.0136 14.1665 13.1891 13.8685C13.3426 13.5971 13.4209 13.2896 13.4158 12.9778C13.4106 12.6661 13.3223 12.3613 13.1599 12.0951ZM6.9999 12.5035C6.88452 12.5035 6.77174 12.4693 6.67581 12.4052C6.57988 12.3411 6.50512 12.25 6.46097 12.1434C6.41681 12.0368 6.40526 11.9195 6.42777 11.8063C6.45028 11.6932 6.50584 11.5893 6.58742 11.5077C6.669 11.4261 6.77294 11.3705 6.88609 11.348C6.99925 11.3255 7.11654 11.3371 7.22313 11.3812C7.32972 11.4254 7.42082 11.5001 7.48492 11.5961C7.54902 11.692 7.58323 11.8048 7.58323 11.9202C7.58323 12.0749 7.52177 12.2232 7.41237 12.3326C7.30298 12.442 7.1546 12.5035 6.9999 12.5035ZM7.58323 10.1702C7.58323 10.3249 7.52177 10.4732 7.41237 10.5826C7.30298 10.692 7.1546 10.7535 6.9999 10.7535C6.84519 10.7535 6.69681 10.692 6.58742 10.5826C6.47802 10.4732 6.41656 10.3249 6.41656 10.1702V7.83682C6.41656 7.68211 6.47802 7.53373 6.58742 7.42434C6.69681 7.31494 6.84519 7.25348 6.9999 7.25348C7.1546 7.25348 7.30298 7.31494 7.41237 7.42434C7.52177 7.53373 7.58323 7.68211 7.58323 7.83682V10.1702Z" fill="#D44848" />
              </svg>
              <p>Upload atleast 1 image. </p>
            </div>

            <div className="lists2-4">
              <img src={upload1} />
              <svg width="15" height="15" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_482_618)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9731 4.02091L11.5392 11.3968C11.523 11.6727 11.402 11.932 11.2009 12.1216C10.9998 12.3112 10.7339 12.4168 10.4575 12.4167H6.54234C6.26595 12.4168 5.99999 12.3112 5.7989 12.1216C5.59781 11.932 5.4768 11.6727 5.46063 11.3968L5.02784 4.02091H3.89575V3.47925C3.89575 3.40742 3.92429 3.33853 3.97508 3.28774C4.02587 3.23695 4.09476 3.20841 4.16659 3.20841H12.8333C12.9051 3.20841 12.974 3.23695 13.0248 3.28774C13.0756 3.33853 13.1041 3.40742 13.1041 3.47925V4.02091H11.9731ZM7.41659 1.85425H9.58325C9.65508 1.85425 9.72397 1.88278 9.77476 1.93357C9.82555 1.98436 9.85409 2.05325 9.85409 2.12508V2.66675H7.14575V2.12508C7.14575 2.05325 7.17429 1.98436 7.22508 1.93357C7.27587 1.88278 7.34476 1.85425 7.41659 1.85425ZM6.87492 5.37508L7.14575 10.2501H7.95825L7.74159 5.37508H6.87492ZM9.31242 5.37508L9.04159 10.2501H9.85409L10.1249 5.37508H9.31242Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_482_618">
                    <rect width="13" height="13" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>

            </div>

            <div className="lists2-5">
              <label htmlFor="room1">Total number of rooms available</label>
              <input type="text" id="room1" placeholder="Total rooms available" />
            </div>
            <div className="lists2-5">
              <label htmlFor="room2">Stayers per room </label>
              <input type="text" id="room2" placeholder="Total beds available" />
            </div>
            <div className="lists2-5">
              <label htmlFor="room3">Total number of rooms available</label>
              <input type="text" id="room3" placeholder="Total beds available" />
            </div>

            <div className="lists2-3">
              <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1599 12.0951L8.68573 4.67515C8.50481 4.39213 8.25555 4.15921 7.96093 3.99786C7.6663 3.83652 7.3358 3.75195 6.9999 3.75195C6.66399 3.75195 6.33349 3.83652 6.03886 3.99786C5.74424 4.15921 5.49498 4.39213 5.31406 4.67515L0.839896 12.0951C0.681844 12.3586 0.595939 12.659 0.590819 12.9662C0.585699 13.2734 0.661544 13.5766 0.810729 13.8451C0.983209 14.1475 1.23286 14.3986 1.53418 14.5728C1.8355 14.747 2.17767 14.8381 2.52573 14.8368H11.4741C11.8198 14.8405 12.1605 14.7529 12.4616 14.5829C12.7627 14.4129 13.0136 14.1665 13.1891 13.8685C13.3426 13.5971 13.4209 13.2896 13.4158 12.9778C13.4106 12.6661 13.3223 12.3613 13.1599 12.0951ZM6.9999 12.5035C6.88452 12.5035 6.77174 12.4693 6.67581 12.4052C6.57988 12.3411 6.50512 12.25 6.46097 12.1434C6.41681 12.0368 6.40526 11.9195 6.42777 11.8063C6.45028 11.6932 6.50584 11.5893 6.58742 11.5077C6.669 11.4261 6.77294 11.3705 6.88609 11.348C6.99925 11.3255 7.11654 11.3371 7.22313 11.3812C7.32972 11.4254 7.42082 11.5001 7.48492 11.5961C7.54902 11.692 7.58323 11.8048 7.58323 11.9202C7.58323 12.0749 7.52177 12.2232 7.41237 12.3326C7.30298 12.442 7.1546 12.5035 6.9999 12.5035ZM7.58323 10.1702C7.58323 10.3249 7.52177 10.4732 7.41237 10.5826C7.30298 10.692 7.1546 10.7535 6.9999 10.7535C6.84519 10.7535 6.69681 10.692 6.58742 10.5826C6.47802 10.4732 6.41656 10.3249 6.41656 10.1702V7.83682C6.41656 7.68211 6.47802 7.53373 6.58742 7.42434C6.69681 7.31494 6.84519 7.25348 6.9999 7.25348C7.1546 7.25348 7.30298 7.31494 7.41237 7.42434C7.52177 7.53373 7.58323 7.68211 7.58323 7.83682V10.1702Z" fill="#D44848" />
              </svg>
              <p>Please select one of the below reasons.</p>
            </div>

            <div className="lists2-6">
              <h3>Facilities</h3>
              <div className=" lists2-61">
                <label htmlFor="food" className="lists2-618">
                  <input type="checkbox" id="food" />
                  <span></span>
                  <p>Food Included</p></label><br />
                <label htmlFor="acrooms" className="lists2-618">
                  <input type="checkbox" id="acrooms" />
                  <span></span>
                  <p>AC - Non AC rooms</p></label><br />
              </div>
              <div className=" lists2-611">
                <label htmlFor="wifi" className="lists2-618">
                  <input type="checkbox" id="wifi" />
                  <span></span>
                  <p> Wi-fi</p></label><br />
                <label htmlFor="tv" className="lists2-618">
                  <input type="checkbox" id="tv" />
                  <span></span>
                  <p>TV</p></label><br />
              </div>
              <div className=" lists2-612">
                <label htmlFor="cctv" className="lists2-618">
                  <input type="checkbox" id="cctv" />
                  <span></span>
                  <p>CCTV</p></label><br />
                <label htmlFor="refrigerator" className="lists2-618">
                  <input type="checkbox" id="refrigerator" />
                  <span></span>
                  <p>Refrigerator</p></label><br />
              </div>
              <div className=" lists2-613">
                <label htmlFor="parentstay" className="lists2-618">
                  <input type="checkbox" id="parentstay" />
                  <span></span>
                  <p>Parents Stay</p> </label><br />
                <label htmlFor="furniture" className="lists2-618">
                  <input type="checkbox" id="furniture" />
                  <span></span>
                  <p>Essential Furnitures</p></label><br />
              </div>

              <div className=" lists2-614">
                <label htmlFor="parking" className="lists2-618">
                  <input type="checkbox" id="parking" />
                  <span></span>
                  <p>Parking</p></label><br />
                <label htmlFor="washingmachine" className="lists2-618">
                  <input type="checkbox" id="washingmachine" />
                  <span></span>
                  <p>Washing Machine</p> </label><br />
              </div>

              <div className=" lists2-615">
                <label htmlFor="securityguard" className="lists2-618">
                  <input type="checkbox" id="securityguard" />
                  <span></span>
                  <p>Security Guard</p></label><br />
                <label htmlFor="powerbackup" className="lists2-618">
                  <input type="checkbox" id="powerbackup" />
                  <span></span>
                  <p>Power Backup</p></label><br />
              </div>

            </div>
            <div className="lists2-7">
              <h3>Stay Environment</h3>
              <div className="lists2-71">
                <div className="lists2-73">
                  <input type="radio" id="chill" name="option" className="lists2-731" />
                  <label htmlFor="chill">Chill</label><br />
                </div>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 19.424C15.1086 19.424 19.25 15.2826 19.25 10.174C19.25 5.06532 15.1086 0.92395 10 0.92395C4.89137 0.92395 0.75 5.06532 0.75 10.174C0.75 15.2826 4.89137 19.424 10 19.424Z" stroke="#DDDDDD" stroke-width="1.5" />
                  <path d="M10 9.98694V14.9869" stroke="#DDDDDD" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M10 7.86194C10.6904 7.86194 11.25 7.30229 11.25 6.61194C11.25 5.92158 10.6904 5.36194 10 5.36194C9.30964 5.36194 8.75 5.92158 8.75 6.61194C8.75 7.30229 9.30964 7.86194 10 7.86194Z" fill="#DDDDDD" />
                </svg>
              </div>
              <div className="lists2-71">
                <div className="lists2-73">
                  <input type="radio" id="balance" name="option" className="lists2-731" />
                  <label htmlFor="balance">Balanced</label><br />
                </div>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 19.424C15.1086 19.424 19.25 15.2826 19.25 10.174C19.25 5.06532 15.1086 0.92395 10 0.92395C4.89137 0.92395 0.75 5.06532 0.75 10.174C0.75 15.2826 4.89137 19.424 10 19.424Z" stroke="#DDDDDD" stroke-width="1.5" />
                  <path d="M10 9.98694V14.9869" stroke="#DDDDDD" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M10 7.86194C10.6904 7.86194 11.25 7.30229 11.25 6.61194C11.25 5.92158 10.6904 5.36194 10 5.36194C9.30964 5.36194 8.75 5.92158 8.75 6.61194C8.75 7.30229 9.30964 7.86194 10 7.86194Z" fill="#DDDDDD" />
                </svg>
              </div>

              <div className="lists2-71">
                <div className="lists2-73">
                  <input type="radio" id="focus" name="option" className="lists2-731" />
                  <label htmlFor="focus">Focused</label><br />
                </div>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 19.424C15.1086 19.424 19.25 15.2826 19.25 10.174C19.25 5.06532 15.1086 0.92395 10 0.92395C4.89137 0.92395 0.75 5.06532 0.75 10.174C0.75 15.2826 4.89137 19.424 10 19.424Z" stroke="#DDDDDD" stroke-width="1.5" />
                  <path d="M10 9.98694V14.9869" stroke="#DDDDDD" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M10 7.86194C10.6904 7.86194 11.25 7.30229 11.25 6.61194C11.25 5.92158 10.6904 5.36194 10 5.36194C9.30964 5.36194 8.75 5.92158 8.75 6.61194C8.75 7.30229 9.30964 7.86194 10 7.86194Z" fill="#DDDDDD" />
                </svg>
              </div>
            </div>
            <input type="submit" value="Continue" className="btn-continue1" />
            <div className='whatapp-logo2'>
              <img src={whatapp} className="logo" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Listproperty2;