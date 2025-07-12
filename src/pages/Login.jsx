import Nav from "./Nav";
import hostel from "./../assets/images/hostel.png"
import whatapp from "./../assets/images/whatapp.png"

function Login() {

  return (
    <>
      <div className="log">
   < Nav/>
        <div className="login1">
          <div className="login-1">
            <div className="login-11">
              <h5>Welcome Back </h5>
              <p>Today is a new day. It's your day. You shape it.
                Sign in to start managing your projects.</p>
            </div>
            <div className="login-21">
              <label htmlFor="phone">Phone Number</label><br />
              <input type="text" id="phone" placeholder="+91 12345 12345" /><br /><br />
              <label htmlFor="pass">Password</label><br />
              <input type="text" id="pass" placeholder="at least 8 character" /><br />
              <p>Forget Password?</p>
              <input type="submit" value="Sign in" className="btn-submit" />
            </div>
            <div className="login-3">
              <p>Or</p>
              <div className="login-31">
                <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_719_427)">
                    <path d="M28.2273 14.8225C28.2273 13.8709 28.1501 12.914 27.9855 11.9778H14.7803V17.3689H22.3423C22.0285 19.1077 21.0202 20.6458 19.5438 21.6232V25.1213H24.0553C26.7046 22.6829 28.2273 19.082 28.2273 14.8225Z" fill="#4285F4" />
                    <path d="M14.7803 28.501C18.5561 28.501 21.7404 27.2612 24.0605 25.1213L19.549 21.6232C18.2938 22.4771 16.6734 22.9607 14.7854 22.9607C11.133 22.9607 8.0362 20.4966 6.92505 17.1837H2.26953V20.7898C4.64616 25.5174 9.48688 28.501 14.7803 28.501Z" fill="#34A853" />
                    <path d="M6.9199 17.1837C6.33346 15.4449 6.33346 13.5621 6.9199 11.8234V8.21729H2.26953C0.283856 12.1732 0.283856 16.8339 2.26953 20.7898L6.9199 17.1837Z" fill="#FBBC04" />
                    <path d="M14.7803 6.04127C16.7762 6.01041 18.7053 6.76146 20.1508 8.14012L24.1479 4.14305C21.6169 1.76642 18.2578 0.45979 14.7803 0.500943C9.48687 0.500943 4.64616 3.48459 2.26953 8.21728L6.91991 11.8234C8.02591 8.50536 11.1279 6.04127 14.7803 6.04127Z" fill="#EA4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_719_427">
                      <rect width="28" height="28" fill="white" transform="translate(0.5 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Sign in with Google</p>
              </div>
              <div className="login-31">
                <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_719_440)">
                    <path d="M28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 21.4877 5.61957 27.2796 12.3125 28.3299V18.5469H8.75781V14.5H12.3125V11.4156C12.3125 7.90687 14.4027 5.96875 17.6005 5.96875C19.1318 5.96875 20.7344 6.24219 20.7344 6.24219V9.6875H18.9691C17.23 9.6875 16.6875 10.7668 16.6875 11.875V14.5H20.5703L19.9496 18.5469H16.6875V28.3299C23.3804 27.2796 28.5 21.4877 28.5 14.5Z" fill="#1877F2" />
                    <path d="M19.9496 18.5469L20.5703 14.5H16.6875V11.875C16.6875 10.7679 17.23 9.6875 18.9691 9.6875H20.7344V6.24219C20.7344 6.24219 19.1323 5.96875 17.6005 5.96875C14.4027 5.96875 12.3125 7.90688 12.3125 11.4156V14.5H8.75781V18.5469H12.3125V28.3299C13.762 28.5567 15.238 28.5567 16.6875 28.3299V18.5469H19.9496Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_719_440">
                      <rect width="28" height="28" fill="white" transform="translate(0.5 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Sign in with Facebook</p>
              </div>
            </div>
            <p className="login-4">Don't you have an account?<span>Sign up</span> </p>

          </div>
          <div>
            <img src={hostel} className="login-5" />
          </div>
          <div className='whatapp-logo1'>
            <img src={whatapp}  className="logo"/>
          </div>
        </div>
      </div>

    </>
  )
}
export default Login;