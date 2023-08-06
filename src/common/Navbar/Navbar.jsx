import { Component, createRef } from "react";
import Cart from "./Cart";
import { connect } from 'react-redux';


//Nav Links Data
export const navLinks = [
  "products",
  "Best seller",
  "new arrival",
  "about us",
  "contact us",
];


class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      productsLength: 0,
      isNavbarFixed: false
    }
    this.mobileNav = createRef(null);
    this.navList = createRef(null);
  }
  componentDidMount() {
    this.setState({
      productsLength: this.props.cart.length
    })
    window.addEventListener('scroll', this.handleScroll);

  }
  componentDidUpdate(prevProps) {
    if (this.props.cart.length !== this.state.productsLength) {
      this.setState({ productsLength: this.props.cart.length });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const isFixed = window.scrollY > 0;
    this.setState({ isNavbarFixed: isFixed });
  };
  openMenu = () => {
    this.mobileNav.current.style.visibility = "visible";
    this.navList.current.style.transform = "translateX(0)";
  };
  closeMenu = () => {
    this.mobileNav.current.style.visibility = "hidden";
    this.navList.current.style.transform = "translateX(-15rem)";
  };
  openCart = () => {
    this.setState(prevState => ({
      showCart: !prevState.showCart
    }));
  }
  render() {
    const { isNavbarFixed } = this.state;
    return (
      <>
        <header>
          <div className={isNavbarFixed ? 'navbar fixed' : 'navbar'}>
            <div className="menu" onClick={() => this.openMenu()}>
              <img
                src="./AlignLeftText.svg"
                alt="AlignLeftText"
              />
            </div>
            <div className="logo">
              <img
                src="./logo.png"
                alt="menu"
              />
            </div>

            <nav className="nav nav-desktop">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li key={link} className="nav-item">
                    <a href="#" className="nav-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav ref={this.mobileNav} className="nav nav-mobile">
              <ul ref={this.navList} className="nav-list-mobile">
                <button className="btn btn-close" onClick={() => this.closeMenu()}>
                  <img
                    src={require("../../utils/images/Clear Circle.svg").default}
                    alt="close"
                  />
                </button>
                {navLinks.map((link) => (
                  <li key={link} className="nav-item-mobile">
                    <a href="#" className="nav-link-mobile">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="navbar-info">
              <div className="btn-icon">
                <img src="/vuesax-linear-profile 1.svg" alt="profile" />
              </div>
              <div className="btn-icon" onClick={() => this.openCart()}>
                <img src="/vuesax-linear-shopping-cart 1.svg" alt="chart" />
                <div className="badge" >{this.props.cart.length}</div>
              </div>
              <div className="btn-icon">
                <img src="/vuesax-linear-search-normal 1.svg" alt="search" />
              </div>

            </div>
          </div>
        </header>
        {
          this.state.showCart ? <Cart closeChart={this.openCart} /> : null
        }
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      cart: state.cart.cart,
      cartUpdated: () => { return true }
  }
};


export default connect(mapStateToProps)(Navbar)
