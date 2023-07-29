import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Owner: Nibaron Kumar Das.</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f8f8f8',
  padding: '20px 0',
  textAlign: 'center',
};

export default Footer;
