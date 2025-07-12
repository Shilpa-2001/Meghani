import profile from './../assets/images/profile.png';
import Logotype1 from './../assets/images/Logotype1.svg';

function Experience() {
  return (
    <div  className='experience-container'>
              <div className='experience'>
                <div className='review'>
                  <div>
                    <img src={profile} />
                  </div>
                  <div className='detail1'>
                    <h2>Oni Boys Hostel</h2>
                    <p>Stayer's Experience<br />Moved with
                      <img src={Logotype1} />
                    </p>
                  </div>
                </div>
                <div className='comment'>
                  <div>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#000929" />
                      <path d="M10.2711 20.952L12.1271 13.848L12.6711 16.248C11.9245 16.248 11.2951 16.0133 10.7831 15.544C10.2925 15.0747 10.0471 14.4453 10.0471 13.656C10.0471 12.8667 10.2925 12.2373 10.7831 11.768C11.2951 11.2773 11.9138 11.032 12.6391 11.032C13.3858 11.032 14.0045 11.2773 14.4951 11.768C14.9858 12.2587 15.2311 12.888 15.2311 13.656C15.2311 13.8907 15.2098 14.136 15.1671 14.392C15.1458 14.6267 15.0818 14.904 14.9751 15.224C14.8898 15.5227 14.7405 15.9173 14.5271 16.408L12.8631 20.952H10.2711ZM17.0551 20.952L18.9111 13.848L19.4551 16.248C18.7085 16.248 18.0791 16.0133 17.5671 15.544C17.0765 15.0747 16.8311 14.4453 16.8311 13.656C16.8311 12.8667 17.0765 12.2373 17.5671 11.768C18.0791 11.2773 18.6978 11.032 19.4231 11.032C20.1698 11.032 20.7885 11.2773 21.2791 11.768C21.7698 12.2587 22.0151 12.888 22.0151 13.656C22.0151 13.8907 21.9938 14.136 21.9511 14.392C21.9298 14.6267 21.8658 14.904 21.7591 15.224C21.6738 15.5227 21.5245 15.9173 21.3111 16.408L19.6471 20.952H17.0551Z" fill="white" />
                    </svg>
      
                  </div>
                  <div className='comment12'>
                    <p>I loved how smooth the move was, and I finally got the hostel I wanted!</p>
                  </div>
                </div>
                <div className='data1'>
                  <div>
                    <h2>₹ 1,500</h2>
                    <p>Saved up to</p>
                  </div>
                  <div>
                    <h2>20 min</h2>
                    <p>Booking Process Time</p>
                  </div>
                  <div className='triangle'></div>
                </div>
              
              </div>
              
             
    </div>
  )
}

export default Experience
