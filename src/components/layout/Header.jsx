import logo from '../../assets/logo.png';

function Header() {
  return (
    <div className='header'>
      <div className='headerTop'>
        <img className='headerLogo' src={logo} alt='logo' />
      </div>
      <div className='headerNav'>
        <ul className='headerUl'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Product</a>
          </li>
          <li>
            <a href='#'>Company</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
