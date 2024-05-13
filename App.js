import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './index.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State variable for menu open/close

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  let navigation;

  if (isMobile) {
    navigation = (
      <div className="navigation-container">
        <div style={{display:"flex",width:"100%",boeder:"2px solid black"}}><img
          src={'https://s3-alpha-sig.figma.com/img/d3bb/f0d5/422671e89ac2f44ff9cc738b8a4e3f9b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsoJy5Z2uPXuuKSWiCGIgTZW4eq5~eS1XBKDbRp~37fZxvFsYVozBmclO552mCATsIvQi3PP0h-US0GwYrDDiRYXoi7E9D9jXi9Nhegd95a4ZZaIXcYj6Rnp6aFMsfJECqETiN03e6Vlr~j03u375zbQJblAIjo1-AmxKtWC-E7IQN2w5TmpeA99ed9e~je~29J5FVcvElnMWm6gS0BgG1konAzirHpbUgpa34RJQzpWu5RVErpj39Zco4yk-rlCmwkkRgQc5Sip-BjSiWvN4IW04Jv9De~C9w7o4~OukE83fadxW-xukcUHtWDtMUl~f9n1Ri7xAf8drOs4aS5tXA__'}
          alt="logo"
          style={{ height: '60px' }}
        />
        <FontAwesomeIcon icon={faBars} style={{fontSize:"20px",marginTop:"10%",marginLeft:"75%",border:"2px solid black",display:"block",position:"relative"}} onClick={handleIconClick} /></div>
        {isMenuOpen && ( // Render menu items conditionally based on menu state
          <>
          <div className='h'>
          <h2 style={{marginTop:"20%"}}>Our Products<span>&#9660;</span></h2>
            <h2 style={{ color: "#fc8320" }}>Pricing</h2>
            <h2>Resources</h2>
            <h2>About Us</h2>
            <h2>Contact Us</h2>
            <h2>Schedule Demo</h2>
            <button style={{marginLeft:"-80%"}}>Schedule Box</button>
          </div>
          </>
        )}
      </div>
    );
  } else {
    navigation = (
      <div className="navigation-container">
        <img
          src={'https://s3-alpha-sig.figma.com/img/d3bb/f0d5/422671e89ac2f44ff9cc738b8a4e3f9b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsoJy5Z2uPXuuKSWiCGIgTZW4eq5~eS1XBKDbRp~37fZxvFsYVozBmclO552mCATsIvQi3PP0h-US0GwYrDDiRYXoi7E9D9jXi9Nhegd95a4ZZaIXcYj6Rnp6aFMsfJECqETiN03e6Vlr~j03u375zbQJblAIjo1-AmxKtWC-E7IQN2w5TmpeA99ed9e~je~29J5FVcvElnMWm6gS0BgG1konAzirHpbUgpa34RJQzpWu5RVErpj39Zco4yk-rlCmwkkRgQc5Sip-BjSiWvN4IW04Jv9De~C9w7o4~OukE83fadxW-xukcUHtWDtMUl~f9n1Ri7xAf8drOs4aS5tXA__'}
          alt="logo"
          style={{ height: '60px' }}
        />
        <h2>Our Products<span style={{ fontSize: "15px" }}>&#9660;</span></h2>
        <h2 style={{ color: "#fc8320" }}>Pricing</h2>
        <h2>Resources</h2>
        <h2>About Us</h2>
        <h2>Contact Us</h2>
        <h2>Schedule Demo</h2>
        <button>Schedule Box</button>
      </div>
    );
  }
  return (
    <>
      <nav-bar>
        {/* <img
          src={'https://s3-alpha-sig.figma.com/img/d3bb/f0d5/422671e89ac2f44ff9cc738b8a4e3f9b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsoJy5Z2uPXuuKSWiCGIgTZW4eq5~eS1XBKDbRp~37fZxvFsYVozBmclO552mCATsIvQi3PP0h-US0GwYrDDiRYXoi7E9D9jXi9Nhegd95a4ZZaIXcYj6Rnp6aFMsfJECqETiN03e6Vlr~j03u375zbQJblAIjo1-AmxKtWC-E7IQN2w5TmpeA99ed9e~je~29J5FVcvElnMWm6gS0BgG1konAzirHpbUgpa34RJQzpWu5RVErpj39Zco4yk-rlCmwkkRgQc5Sip-BjSiWvN4IW04Jv9De~C9w7o4~OukE83fadxW-xukcUHtWDtMUl~f9n1Ri7xAf8drOs4aS5tXA__'}
          alt="logo"
          style={{ height: '60px' }}
        /> */}
        {navigation}
      </nav-bar>
      <work>
        <div className='free-trial'>
          <div className='free' >
            <p>
              Why is
              <span style={{ color: '#fc8320' }}> Sortboxs India's </span>
              the most preferred HR Platform? Get Started for a free Demo and find out for yourself.<br></br>
              <button>Get Free trial</button>
            </p>
          </div>
          <div>
            <img
              src='https://s3-alpha-sig.figma.com/img/45f7/e595/4e403c3837ad4dafef562a8ff457a800?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aN1tdpViQCO-8BmkwM4IJFnwTag3cgp6h38-ZPQHf5EeUbxtyGgcKAWXXFWjXvglrAu7ZeGu0BTePmGPRJmbODVWKmVyzvvxVenPxfFd80mM~p75FCgPZgUmMpIP1BKdhMVXAA~9rmqdG63dAmP4wz38kA-k5jeFzRcZ4Pix8rVbfGm2BEY9hVnB7SypsqJnAcolf9QunEqfoc5v3RsbrLtUtaB4F-gcsk8b2Re1e1i6PW7sXetvz67ztctiHSdU2qe~PCKYL2CgHrnTvJlwXRt2~LD4oawWmKToW3LJNm80i3vNGM0fjzRz9Lbn0j3Fc6rqmGT1yM38OhPyuVG-zA'
              alt='Sortboxs India'
            />
          </div>
        </div>
      </work>
      <div className='pricing'>
        <h1 style={{ color: '#fc8320' }}>Pricing</h1>
        <p>Features For every need, Pricing for all budgets</p>
      </div>
      <div className='btns'>
        <button style={{ backgroundColor: "#fc8320", color: "white" }}>Billed Monthly</button>
        <button>Billed Annually</button>
      </div>
      <div className='All'>
        <div className='rectangle'>
          <h2>Basic</h2>
          <h2>&#8377;60</h2>
          <p>Per User/month, billed annually</p>
          <h4>For Growing Teams</h4>
          <label>
            <input type='checkbox' />
            Features 1
          </label>
          <label>
            <input type='checkbox' />
            Features 2
          </label>
          <label>
            <input type='checkbox' />
            Features 3
          </label>
          <label>
            <input type='checkbox' />
            Features 4
          </label>
          <button>Get Started</button>
          <p>*Minimum billing for 50 Users</p>
        </div>
        <div className='rectangle' style={{ backgroundColor: "#fc8320", color: "white" }}>
          <h2>Standard</h2>
          <h2>&#8377;80</h2>
          <p>Per User/month, billed annually</p>
          <h4>For Growing Teams</h4>
          <label>
            <input className='in' type='checkbox' />
            Features 1
          </label>
          <label>
            <input className='in' type='checkbox' />
            Features 2
          </label>
          <label>
            <input className='in' type='checkbox' />
            Features 3
          </label>
          <label>
            <input className='in' type='checkbox' />
            Features 4
          </label>
          <button style={{ backgroundColor: "white", color: "#fc8320" }}>Get Started</button>
          <p>*Minimum billing for 50 Users</p>
        </div>
        <div className='rectangle'>
          <h2>Advanced</h2>
          <h2>&#8377;100</h2>
          <p>Per User/month, billed annually</p>
          <h4>For Growing Teams</h4>
          <label>
            <input type='checkbox' />
            Features 1
          </label>
          <label>
            <input type='checkbox' />
            Features 2
          </label>
          <label>
            <input type='checkbox' />
            Features 3
          </label>
          <label>
            <input type='checkbox' />
            Features 4
          </label>
          <button>Get Started</button>
          <p>*Minimum billing for 50 Users</p>
        </div>
      </div>
      <div className='box'>
        <h2>Why is Sortboxs India's Most preferred HR Platform? Get Started for free and find out yourself</h2>
        <button>Get free trial</button>
      </div>
      <h1 style={{ marginBottom: '1%' }}>Frequently Asked Questions</h1>
      <div className='questions'>
        <div>
          <div className='ans'>
            <div className='answer'>
              <h1>Which pricing plan is right for me?</h1>
              <h1>-</h1>
            </div>
            <p>
              We understand that each organization is unique, requiring specific features to support its workflow and project. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.
            </p>
          </div>
        </div>
        <div className='bx'>
          <h1>How does our Pricing work?</h1>
          <h1>&#x2304;</h1>
        </div>
        <div className='bx'>
          <h1>What if I change my mind?</h1>
          <h1>&#x2304;</h1>
        </div>
        <div className='bx'>
          <h1>Do you offer any discount?</h1>
          <h1>&#x2304;</h1>
        </div>
        <div className='bx'>
          <h1>Does Venture offer plans to non-profit and NGOs?</h1>
          <h1>&#x2304;</h1>
        </div>
        <div className='bx'>
          <h1>How can I manage my billing?</h1>
          <h1>&#x2304;</h1>
        </div>
        <div className='bx'>
          <h1>Can I change my plan?</h1>
          <h1>&#x2304;</h1>
        </div>
      </div>
      <footer>
        <div>
          <img
            src='https://s3-alpha-sig.figma.com/img/d3bb/f0d5/422671e89ac2f44ff9cc738b8a4e3f9b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsoJy5Z2uPXuuKSWiCGIgTZW4eq5~eS1XBKDbRp~37fZxvFsYVozBmclO552mCATsIvQi3PP0h-US0GwYrDDiRYXoi7E9D9jXi9Nhegd95a4ZZaIXcYj6Rnp6aFMsfJECqETiN03e6Vlr~j03u375zbQJblAIjo1-AmxKtWC-E7IQN2w5TmpeA99ed9e~je~29J5FVcvElnMWm6gS0BgG1konAzirHpbUgpa34RJQzpWu5RVErpj39Zco4yk-rlCmwkkRgQc5Sip-BjSiWvN4IW04Jv9De~C9w7o4~OukE83fadxW-xukcUHtWDtMUl~f9n1Ri7xAf8drOs4aS5tXA__'
            alt='Sortboxs India'
            style={{ height: '60px', backgroundColor: 'white' }}
          />
          <p>Sortboxs is made for your</p> people by people like you, who<p> care for people in the organization.</p>
        </div>
        <div>
          <h2>HR & Payroll</h2>
          <p>What is HRMS?</p>
          <p>What is payroll?</p>
          <p>What is Statutory Compliance?</p>
          <p>Guide to Leave Management</p>
          <p>Guide to Attendance Management</p>
        </div>
        <div>
          <h2>Product</h2>
          <p>HR Software</p>
          <p>Payroll Software</p>
          <p>Leave Management System</p>
          <p>Attendance Management System</p>
          <p>Performance Management System</p>
          <p>Employee Self Service</p>
        </div>
        <div>
          <h2>Resources</h2>
          <p>Blogs</p>
          <p>Webinars</p>
          <p>Case Study</p>
        </div>
        <div>
          <h2>Company</h2>
          <p>About</p>
          <p>Customers</p>
          <p>Payroll Service Provider</p>
          <p>Plans & Pricing</p>
          <p>Newsroom</p>
          <p>Contact Us</p>
        </div>
      </footer>
      <p style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', border: '2px solid white' }}>
        <span>©</span>Copyright 2024, All Rights Reserved by <span style={{ color: '#fc8320' }}>Sortboxs</span>
      </p>
    </>
  );
}

export default App;
