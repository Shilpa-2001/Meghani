import whatapp from "./../assets/images/whatapp.png";
import Nav from "./Nav";

function Listproperty1() {

  return (
    <>
      <div className="lists-1">
        <Nav/>
        <div className="lists-11">
          <div className="lists-12">
            <p><span>1</span> of 4 steps completed</p>
            <progress id="file" value="100" max="100"></progress>
            <progress id="file1" value="0" max="100"></progress>
            <progress id="file2" value="0" max="100" ></progress>
            <progress id="file3" value="0" max="100" ></progress>
          </div>
          
          <div className="lists-13">
          <form action="">
            <h2>Basic Information</h2>
            <label htmlFor="propertyName">Property name</label>
            <br />
            <input type="text" id="propertyName" placeholder="Property name" />
            <br />

            <div className="lists-131">
              <label htmlFor="propertyType">Property type</label>
              <p>Choose hostel,PG or Flat</p>
            <br />

            <select name="car" id="car">
              <option value="">Please select</option>
              <option value="hostel">Hostel</option>
              <option value="pg">PG</option>
              <option value="flat">Flat</option>
            </select>
            </div>
            <br />
            <div className="lists-131">
              <label htmlFor="stayType">Stay type</label>
              <p>Choose Boys,Girls or Co-ed</p>
          

            <br />

            <select name="staytype" id="staytype">
              <option value="">Please select</option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
              <option value="coed">coed</option>
            </select>
            <br />
            </div>

            <label htmlFor="city">City</label><br />

            <select name="city" id="city">
              <option value=""> Please select</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="ranchi">Ranchi</option>
            </select>

            <br />
            <label htmlFor="area">Area</label><br />
            <input type="text" id="area" placeholder="Area" />
            <br />
            <label htmlFor="pincode">Pin code</label><br />
            <input type="text" id="pincode" placeholder="Pin code" />
            <br />
            
            
            <input type="submit" value="Continue" className="btn-continue" />
            </form>
          

          </div>

          <div className='whatapp-logo1'>
            <img src={whatapp} className="logo" alt="whatappp logo" />
          </div>

        </div>
      </div>
    </>
  )
}
export default Listproperty1;