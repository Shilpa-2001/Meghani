        import React, { useState } from 'react';

        function Faq31() {
          const features = [
            {
              buttonLabel: 'Bookings Management',
              title: 'Manage Bookings Effortlessly',
              paragraph:'Easily approve or reject reservations, track tenant stays, and manage occupancy in one place, ensuring a smooth and hassle-free booking experience.',
              image: 'src/assets/images/Brainstrom.png'
            },
            {
              buttonLabel: 'Online Payments',
              title: 'Accept Payments Instantly',
              paragraph: 'Collect rent securely through online payments, automate invoices, send payment reminders, and ensure seamless transactions without manual follow-ups or delays.',
              image: 'src/assets/images/img-2.jpg'
            },
            {
              buttonLabel: 'Tenant Records',
              title: 'Keep Tenant Records Organized',
              paragraph: 'Maintain digital records of tenant KYC, lease agreements, payment history, and stay duration, making property management efficient and paperless.',
              image: 'src/assets/images/img3.jpg'
            },
            {
              buttonLabel: 'Revenue Tracking',
              title: 'Track Your Earnings Easily',
              paragraph: 'Get real-time insights into revenue, expenses, and profits. Analyze earnings, optimize pricing, and maximize your rental income effortlessly.',
              image: 'src/assets/images/img4.jpg'
            },
            {
              buttonLabel: 'Staff & Maintenance',
              title: 'Handle Staff & Maintenance',
              paragraph: 'Assign maintenance tasks, track staff performance, resolve complaints, and ensure smooth day-to-day operations for a well-managed property.',
              image: 'src/assets/images/img5.jpg'
            },
            {
              buttonLabel: 'Room & Availability Management',
              title: 'Optimize Room Availability',
              paragraph: 'Monitor room occupancy in real-time, reduce vacancies, and improve revenue by efficiently managing available spaces and incoming bookings.',
              image: 'src/assets/images/img6.jpg'
            },
          ];
        
          const [selectedIndex, setSelectedIndex] = useState(0);
        
          return (


            <div className='faq3-container'>
            <div className='faq3'>
              <h2>Powerful Features for Easy Management</h2>
        
              {/* Tabs */}
              <div className='faq-31'>
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    style={{backgroundColor: selectedIndex !== index ? '#E1E8E8' : '#1D555C',
                      color: selectedIndex === index ? 'white' : '#1D555C', }}
                  >
                    {feature.buttonLabel}
                  </button>
                ))}
              </div>
        
              {/* Content Display */}
              <div className='faq-32'>
                <div className='faq32-1'>
                <h3>{features[selectedIndex].title}</h3>
                <p>{features[selectedIndex].paragraph}</p>
                <button>
                  Get Started
                </button>
                </div>
             <div className='faq32-2'>
             <img
                  src={features[selectedIndex].image}
                  alt={features[selectedIndex].title}
                  
                />
                <br />
             </div>

               
              </div>
            </div>
            </div>
          );
        }
        
        export default Faq31;
        


