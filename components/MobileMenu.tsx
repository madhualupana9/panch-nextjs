export default function MobileMenu() {
  return (
    <>
      <div className="menu_mobile_overlay scheme_dark"></div>
      <div className="menu_mobile menu_mobile_fullscreen scheme_dark">
        <div className="menu_mobile_inner with_widgets">
          <div className="menu_mobile_header_wrap">
            <a className="sc_layouts_logo" href="#">
              <span className="logo_text">PAANCHAJANYA REALITY</span>
            </a>
            <a className="menu_mobile_close menu_button_close" tabIndex={0}>
              <span className="menu_button_close_text">Close</span>
              <span className="menu_button_close_icon"></span>
            </a>
          </div>
          <div className="menu_mobile_content_wrap content_wrap">
            <div className="menu_mobile_content_wrap_inner">
              <nav
                className="menu_mobile_nav_area"
                itemScope
                itemType="https://schema.org/SiteNavigationElement"
              >
                <ul id="menu_mobile_252574338">
                  <li className="menu-item">
                    <a href="#">
                      <span style={{ color: "#ffffff" }}>About Us</span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">
                      <span style={{ color: "#FFFFFF" }}>Projects</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children">
                        <a href="#">
                          <span>Current Projects</span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="#">
                              <span>Urban Elite Apartments</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="#">
                              <span>Urban Elite Farms</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="#">
                              <span>Premium County</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span style={{ color: "#FFFFFF" }}>Media</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span style={{ color: "#FFFFFF" }}>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="socials_mobile">
                <a
                  target="_blank"
                  href="#"
                  className="social_item"
                >
                  <span className="social_icon icon-facebook-1"></span>
                </a>
                <a
                  target="_blank"
                  href="#"
                  className="social_item"
                >
                  <span className="social_icon icon-instagram"></span>
                </a>
                <a
                  target="_blank"
                  href="#"
                  className="social_item"
                >
                  <span className="social_icon trx_addons_icon-youtube2"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="menu_mobile_widgets_area"></div>
        </div>
      </div>
    </>
  );
}
