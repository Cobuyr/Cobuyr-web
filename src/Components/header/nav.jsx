const Nav = () =>{
    return(
        <header>
        <a href="#" className="logo"><i className="ri-home-heart-fill" /><span>Logo</span></a>
        <ul className="navbar">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="main">
          <a href="#" className="user"><i className="ri-user-fill" />Sign In</a>
          <a href="#">Register</a>
          <div className="bx bx-menu" id="menu-icon" />
        </div>
      </header>
    )
}
export default Nav;