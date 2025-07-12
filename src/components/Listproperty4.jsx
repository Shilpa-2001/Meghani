
import whatapp from "./../assets/images/whatapp.png"
import Nav from "../pages/Nav";


function Listproperty4() {

    return (
        <> 
            <div className="lists-1">
                {/* <Nav/> */}
                <div className="lists-11">
                    <div className="lists-12">
                        <p><span>4</span> of 4 steps completed</p>
                        <progress id="file" value="0" max="100"></progress>
                        <progress id="file1" value="0" max="100"></progress>
                        <progress id="file2" value="0" max="100" ></progress>
                        <progress id="file3" value="100" max="100" ></progress>
                    </div>

                    <div className="list1-11">
                        <h2>Owner Contact Details</h2>
                        <label htmlFor="">Name</label><br />
                        <input type="text" placeholder="Name" /><br />
                        <label htmlFor="">Phone Number</label><br />
                        <input type="text" placeholder="Phone Number" /><br />
                        <label htmlFor="">Email</label><br />
                        <input type="text" placeholder="Email" /><br />


                        <input type="submit" value="Lets Begin" className="btn-continue" />
                    </div>
                    <div className='whatapp-logo1'>
                        <img src={whatapp} className="logo" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Listproperty4;