import React from 'react';

const Footer = () => {
  let d = new Date();
  return (
    <footer>
      <p>
        Copyright
        <span>
          {/* Sets the year to the current year */}
          {d.getFullYear()}
        </span>
        <span>
          <a href="https://Dvontrecoleman.com"> Dvontrecoleman.com</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
