import React, { Fragment } from 'react'

const about = () => {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />

<link rel="stylesheet" href=
"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />


      <link
        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@500&family=Old+Standard+TT:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <header className="header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-12 text-center">
              <h1><strong>Welcome to BYK Bus Booking</strong></h1>
              <p>
              India’s largest online bus ticketing platform that has transformed bus travel in the country by bringing ease and convenience to millions of Indians who travel using buses. 
              Founded in 2022, BYK Bus is part of India’s leading online travel company MakeMyTrip Limited (NASDAQ: MMYT). By providing widest choice, superior customer service, lowest prices and 
              unmatched benefits, redBus has served over 18 million customers. BYK Bus has a global presence with operations across Indonesia, Singapore, Malaysia, Colombia and Peru apart from India.
              </p>
              <button className="btn btn-primary">Start Connecting !</button>
            </div>
          </div>
        </div>
      </header>
      <section className="message py-5">
        <div className="container text-center">
          <h1>We've got what you need!</h1>
          <p>
          BYK Bus partnered with Acko General Insurance to offer travel insurance for its users to cover accidents, 
          baggage loss, cancellation and bus-type mismatch. It also partnered with Truecaller, a company popular 
          for its caller ID and spam blocking solutions for mobile devices, to offer bus ticket booking on Android devices. 
          BYK Bus announced a partnership with Google Maps to present travellers with information on busses that ply between 
          cities with the exact time and information on where to board the bus

          </p>
          <button className="btn btn-primary">Check it out!</button>
        </div>
      </section>
      <section className="services">
        <div className="container text-center1 py-5">
          <h1>About our services</h1>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bar-chart myicon"></i>
                  <h1>Become a Travel Agent</h1>
                  <p>
                    You can also become a travel agent and add your buses for traveling.
                  </p>
                  <button className="btn btn-primary" href="bus-business.herokuapp.com">Visit Site</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bell-o myicon"></i>
                  <h1>Best Explanation</h1>
                  <p>
                  BYK Bus booking use the services of the major computer reservations systems, also known as global distribution systems (GDS), 
                  including: Amadeus CRS, Galileo GDS, Sabre, and Worldspan, which is a subsidiary of Travelport, which allow for comparison and 
                  sorting of hotel and flight rates with multiple companies. Bookings made via travel agents, including online travel agents, 
                  may or may not be confirmed instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-braille myicon"></i>
                  <h1>Operation</h1>
                  <p>
                  In 2022, the company appointed Yajnesh Kumar as its Chief executive officer, who was earlier the Executive Vice President of Info
                  Edge India (Naukri Group), heading Shiksha.com and Jeevansathi.com. In April 2022, BYK bus appointed Allu Arjun, as its brand ambassador
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className="container text-center">
          <h1>Let's Get In Touch!</h1>
          <p>
            Do not hesitate to call or email us more queries
          </p>
          <i className="fa fa-phone myicon text-warning"></i>
          <i className="fa fa-heart myicon text-danger"></i>
          <p>+919334488931</p>
          <p>Bykbusbooking@gmail.com</p>
        </div>
      </section>

      <section className="message py-5">
        <div className="container text-center">
          <h1>Follow us for more details</h1>
          <div className="container">

            <div className="col-md-12">
              <p><i className="bi bi-facebook">www.facebook.com</i></p>
              <p><i className="bi bi-instagram">www.instagram.com</i></p>
              <p><i className="bi bi-twitter">www.twitter.com</i></p>
              <p><i className="bi bi-youtube">www.youtube.com</i></p>
            </div>
          </div>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </section>
      <section className="footer bg-dark">
        <div className="container py-5 text-white text-center">
          <p>Copyright © 2022 - BYK Bus Pvt Ltd.</p>
        </div>
      </section>

    </Fragment>
  )
}

export default about