
"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function MainSlider() {
  useEffect(() => {
    let sliderInstance: any = null;
    const sliderElement = document.getElementById("n2-ss-10");

    const initSlider = () => {
      if (sliderElement && typeof window !== "undefined" && (window as any)._N2) {
        (window as any)._N2.r(
          ["documentReady", "smartslider-frontend", "SmartSliderWidgetArrowImage", "ss-simple"],
          function () {
            sliderInstance = new (window as any)._N2.SmartSliderSimple("n2-ss-10", {
              admin: false,
              "background.video.mobile": 1,
              loadingTime: 2000,
              alias: { id: 0, smoothScroll: 0, slideSwitch: 0, scroll: 1 },
              align: "normal",
              isDelayed: 0,
              responsive: {
                mediaQueries: {
                  all: false,
                  desktopportrait: ["(min-width: 1200px)"],
                  tabletportrait: [
                    "(orientation: landscape) and (max-width: 1199px) and (min-width: 901px)",
                    "(orientation: portrait) and (max-width: 1199px) and (min-width: 701px)",
                  ],
                  mobileportrait: [
                    "(orientation: landscape) and (max-width: 900px)",
                    "(orientation: portrait) and (max-width: 700px)",
                  ],
                },
                base: {
                  slideOuterWidth: 1260,
                  slideOuterHeight: 750,
                  sliderWidth: 1260,
                  sliderHeight: 750,
                  slideWidth: 1260,
                  slideHeight: 750,
                },
                hideOn: {
                  desktopLandscape: false,
                  desktopPortrait: false,
                  tabletLandscape: false,
                  tabletPortrait: false,
                  mobileLandscape: false,
                  mobilePortrait: false,
                },
                onResizeEnabled: true,
                type: "fullwidth",
                sliderHeightBasedOn: "real",
                focusUser: 1,
                focusEdge: "auto",
                breakpoints: [
                  {
                    device: "tabletPortrait",
                    type: "max-screen-width",
                    portraitWidth: 1199,
                    landscapeWidth: 1199,
                  },
                  { device: "mobilePortrait", type: "max-screen-width", portraitWidth: 700, landscapeWidth: 900 },
                ],
                enabledDevices: {
                  desktopLandscape: 0,
                  desktopPortrait: 1,
                  tabletLandscape: 0,
                  tabletPortrait: 1,
                  mobileLandscape: 0,
                  mobilePortrait: 1,
                },
                sizes: {
                  desktopPortrait: { width: 1260, height: 750, max: 3000, min: 1200 },
                  tabletPortrait: { width: 701, height: 417, customHeight: false, max: 1199, min: 701 },
                  mobilePortrait: { width: 320, height: 260, customHeight: false, max: 900, min: 320 },
                },
                overflowHiddenPage: 0,
                focus: { offsetTop: "#wpadminbar", offsetBottom: "" },
              },
              controls: { mousewheel: 0, touch: "horizontal", keyboard: 1, blockCarouselInteraction: 1 },
              playWhenVisible: 1,
              playWhenVisibleAt: 0.5,
              lazyLoad: 0,
              lazyLoadNeighbor: 0,
              blockrightclick: 0,
              maintainSession: 0,
              autoplay: {
                enabled: 1,
                start: 1,
                duration: 3000,
                autoplayLoop: 1,
                allowReStart: 0,
                pause: { click: 0, mouse: "0", mediaStarted: 1 },
                resume: { click: 0, mouse: "0", mediaEnded: 1, slidechanged: 0 },
                interval: 1,
                intervalModifier: "loop",
                intervalSlide: "current",
              },
              perspective: 1500,
              layerMode: { playOnce: 0, playFirstLayer: 1, mode: "skippable", inAnimation: "mainInEnd" },
              bgAnimations: 0,
              mainanimation: {
                type: "fade",
                duration: 800,
                delay: 0,
                ease: "easeOutQuad",
                shiftedBackgroundAnimation: 0,
              },
              carousel: 1,
              initCallbacks: function () {
                new (window as any)._N2.SmartSliderWidgetArrowImage(this);
              },
            });
          }
        );
      } else {
        setTimeout(initSlider, 500);
      }
    };

    initSlider();

    return () => {
      if (sliderInstance && typeof sliderInstance.destroy === 'function') {
        sliderInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-fc5e0f5 elementor-section-full_width elementor-section-height-default elementor-section-height-default sc_fly_static"
        data-id="fc5e0f5"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-extended">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-81a581d sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
            data-id="81a581d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-4399e87 sc_fly_static elementor-widget elementor-widget-shortcode"
                data-id="4399e87"
                data-element_type="widget"
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-shortcode">
                    <div
                      className="n2-section-smartslider fitvidsignore n2_clear"
                      data-ssid="10"
                      tabIndex={0}
                      role="region"
                      aria-label="Slider"
                    >
                      <div id="n2-ss-10-align" className="n2-ss-align">
                        <div className="n2-padding">
                          <div
                            id="n2-ss-10"
                            data-creator="Smart Slider 3"
                            data-responsive="fullwidth"
                            className="n2-ss-slider n2-ow n2-has-hover n2notransition"
                          >
                            <div className="n2-ss-slider-wrapper-inside">
                              <div className="n2-ss-slider-1 n2_ss__touch_element n2-ow">
                                <div className="n2-ss-slider-2 n2-ow">
                                  <div className="n2-ss-slider-3 n2-ow">
                                    <div className="n2-ss-slide-backgrounds n2-ow-all">
                                      <div
                                        className="n2-ss-slide-background"
                                        data-public-id="1"
                                        data-mode="fill"
                                      >
                                        <div
                                          className="n2-ss-slide-background-image"
                                          data-blur="0"
                                          data-opacity="100"
                                          data-x="50"
                                          data-y="50"
                                          data-alt=""
                                          data-title=""
                                        >
                                          <picture className="skip-lazy" data-skip-lazy="1">
                                            <img
                                              decoding="async"
                                              src="/assests/image/banner9.jpg"
                                              alt=""
                                              title=""
                                              loading="lazy"
                                              className="skip-lazy"
                                              data-skip-lazy="1"
                                            />
                                          </picture>
                                        </div>
                                        <div
                                          data-color="RGBA(0,0,0,0.41)"
                                          style={{ backgroundColor: "RGBA(0, 0, 0, 0.41)" }}
                                          className="n2-ss-slide-background-color"
                                          data-overlay="1"
                                        ></div>
                                      </div>
                                      <div
                                        className="n2-ss-slide-background"
                                        data-public-id="2"
                                        data-mode="fill"
                                      >
                                        <div
                                          className="n2-ss-slide-background-image"
                                          data-blur="0"
                                          data-opacity="100"
                                          data-x="40"
                                          data-y="12"
                                          data-alt=""
                                          data-title=""
                                          style={{ "--ss-o-pos-x": "40%", "--ss-o-pos-y": "12%" } as React.CSSProperties}
                                        >
                                          <picture className="skip-lazy" data-skip-lazy="1">
                                            <img
                                              decoding="async"
                                              src="/assests/image/banner2.jpg"
                                              alt=""
                                              title=""
                                              loading="lazy"
                                              className="skip-lazy"
                                              data-skip-lazy="1"
                                            />
                                          </picture>
                                        </div>
                                        <div
                                          data-color="RGBA(0,0,0,0.54)"
                                          style={{ backgroundColor: "RGBA(0, 0, 0, 0.54)" }}
                                          className="n2-ss-slide-background-color"
                                          data-overlay="1"
                                        ></div>
                                      </div>
                                      <div
                                        className="n2-ss-slide-background"
                                        data-public-id="3"
                                        data-mode="fill"
                                      >
                                        <div
                                          className="n2-ss-slide-background-image"
                                          data-blur="0"
                                          data-opacity="100"
                                          data-x="50"
                                          data-y="50"
                                          data-alt=""
                                          data-title=""
                                        >
                                          <picture className="skip-lazy" data-skip-lazy="1">
                                            <img
                                              decoding="async"
                                              src="https://static.wixstatic.com/media/0f832a_598c3812f18a40e4af5023282891e1a8~mv2.png/v1/fill/w_925,h_520,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0f832a_598c3812f18a40e4af5023282891e1a8~mv2.png"
                                              alt=""
                                              title=""
                                              loading="lazy"
                                              className="skip-lazy"
                                              data-skip-lazy="1"
                                            />
                                          </picture>
                                        </div>
                                        <div
                                          data-color="RGBA(0,0,0,0.41)"
                                          style={{ backgroundColor: "RGBA(0, 0, 0, 0.41)" }}
                                          className="n2-ss-slide-background-color"
                                          data-overlay="1"
                                        ></div>
                                      </div>
                                    </div>
                                    <div className="n2-ss-slider-4 n2-ow">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1260 750"
                                        data-related-device="desktopPortrait"
                                        className="n2-ow n2-ss-preserve-size n2-ss-preserve-size--slider n2-ss-slide-limiter"
                                      ></svg>
                                      <div
                                        data-first="1"
                                        data-slide-duration="0"
                                        data-id="69"
                                        data-slide-public-id="1"
                                        data-title="Slide 1"
                                        className="n2-ss-slide n2-ow n2-ss-slide-69"
                                      >
                                        <div
                                          role="note"
                                          className="n2-ss-slide--focus"
                                          tabIndex={-1}
                                        >
                                          Slide 1
                                        </div>
                                        <div
                                          className="n2-ss-layers-container n2-ss-slide-limiter n2-ow"
                                        >
                                          <div
                                            className="n2-ss-layer n2-ow n-uc-HsRl2sehyV33"
                                            data-sstype="slide"
                                            data-pm="default"
                                          >
                                            <div
                                              className="n2-ss-layer n2-ow n-uc-9rlrHGNjqbv4"
                                              data-pm="default"
                                              data-sstype="content"
                                              data-hasbackground="0"
                                            >
                                              <div
                                                className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-9rlrHGNjqbv4-inner"
                                              >
                                                <div
                                                  className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-x5qDrX9DcsEI"
                                                  data-pm="normal"
                                                  data-sstype="row"
                                                >
                                                  <div
                                                    className="n2-ss-layer-row n2-ss-layer-with-background n-uc-x5qDrX9DcsEI-inner"
                                                  >
                                                    <div
                                                      className="n2-ss-layer-row-inner"
                                                    >
                                                      <div
                                                        className="n2-ss-layer n2-ow n-uc-UfJCaJSp2rk2"
                                                        data-pm="default"
                                                        data-sstype="col"
                                                      >
                                                        <div
                                                          className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-UfJCaJSp2rk2-inner"
                                                        >
                                                          <div
                                                            className="n2-ss-layer n2-ow n-uc-0MvHUhmKQD2B"
                                                            data-pm="normal"
                                                            data-sstype="layer"
                                                          >
                                                            <div
                                                              id="n2-ss-10item1"
                                                              className="n2-font-50dc700098640c141c34c6546eae3f8d-hover n2-style-f8293b450b12ef15d5c4ff97a617a3e3-heading n2-ss-item-content n2-ss-text n2-ow"
                                                              style={{
                                                                display: "block",
                                                              }}
                                                            >
                                                              <br />
                                                              <span
                                                                style={{
                                                                  fontWeight: 300,
                                                                  fontStyle: "bold",
                                                                }}
                                                              >
                                                                Own Land. Build Dreams. Create Legacy.
                                                              </span>
                                                              <br />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="n2-ss-layer n2-ow n-uc-SxH7Q52nQtqW n2-ss-layer--auto"
                                                            data-pm="normal"
                                                            data-sstype="layer"
                                                          >
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        data-slide-duration="0"
                                        data-id="63"
                                        data-slide-public-id="2"
                                        data-title="Slide 1"
                                        className="n2-ss-slide n2-ow n2-ss-slide-63"
                                      >
                                        <div
                                          role="note"
                                          className="n2-ss-slide--focus"
                                          tabIndex={-1}
                                        >
                                          Slide 1
                                        </div>
                                        <div
                                          className="n2-ss-layers-container n2-ss-slide-limiter n2-ow"
                                        >
                                          <div
                                            className="n2-ss-layer n2-ow n-uc-Uz9xGKsWpY5f"
                                            data-sstype="slide"
                                            data-pm="default"
                                          >
                                            <div
                                              className="n2-ss-layer n2-ow n-uc-zMaqAOHPG9gJ"
                                              data-pm="default"
                                              data-sstype="content"
                                              data-hasbackground="0"
                                            >
                                              <div
                                                className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-zMaqAOHPG9gJ-inner"
                                              >
                                                <div
                                                  className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-XX8bsul3yDds"
                                                  data-pm="normal"
                                                  data-sstype="row"
                                                >
                                                  <div
                                                    className="n2-ss-layer-row n2-ss-layer-with-background n-uc-XX8bsul3yDds-inner"
                                                  >
                                                    <div
                                                      className="n2-ss-layer-row-inner"
                                                    >
                                                      <div
                                                        className="n2-ss-layer n2-ow n-uc-646ZIVmlbjwP"
                                                        data-pm="default"
                                                        data-sstype="col"
                                                      >
                                                        <div
                                                          className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-646ZIVmlbjwP-inner"
                                                        >
                                                          <div
                                                            className="n2-ss-layer n2-ow n-uc-qzdqKzEO3yRM"
                                                            data-pm="normal"
                                                            data-sstype="layer"
                                                          >
                                                            <div
                                                              id="n2-ss-10item3"
                                                              className="n2-font-50dc700098640c141c34c6546eae3f8d-hover n2-style-f8293b450b12ef15d5c4ff97a617a3e3-heading n2-ss-item-content n2-ss-text n2-ow"
                                                              style={{
                                                                display: "block",
                                                              }}
                                                            >
                                                              <br />
                                                              <span
                                                                style={{
                                                                  fontWeight: 300,
                                                                  fontStyle: "bold",
                                                                }}
                                                              >
                                                                Invest in Land. Invest in Tomorrow
                                                              </span>
                                                              <br />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="n2-ss-layer n2-ow n-uc-zWNUzGto0Z4P n2-ss-layer--auto"
                                                            data-pm="normal"
                                                            data-sstype="layer"
                                                          >
                                                            <div
                                                              className="n2-ss-button-container n2-ss-item-content n2-ow n2-font-16248716f1d5831bb54a9dc1b02d167d-link n2-ss-nowrap n2-ss-button-container--non-full-width"
                                                            >
                                                              <a
                                                                className="n2-style-4e71a4f43fe4ff5a6b7ac2f8ef7bf4e8-heading n2-ow"
                                                                href="javascript:void(0);"
                                                              >
                                                                <div>
                                                                  <div>
                                                                    Know
                                                                    More
                                                                    ➔
                                                                  </div>
                                                                </div>
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        data-slide-duration="0"
                                        data-id="64"
                                        data-slide-public-id="3"
                                        data-title="Slide 1"
                                        className="n2-ss-slide n2-ow n2-ss-slide-64"
                                      >
                                        <div
                                          role="note"
                                          className="n2-ss-slide--focus"
                                          tabIndex={-1}
                                        >
                                          Slide 1
                                        </div>
                                        <div
                                          className="n2-ss-layers-container n2-ss-slide-limiter n2-ow"
                                        >
                                          <div
                                            className="n2-ss-layer n2-ow n-uc-NlSXBLgcSug4"
                                            data-sstype="slide"
                                            data-pm="default"
                                          >
                                            <div
                                              className="n2-ss-layer n2-ow n-uc-Y9c3LVflqdH7"
                                              data-pm="default"
                                              data-sstype="content"
                                              data-hasbackground="0"
                                            >
                                              <div
                                                className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-Y9c3LVflqdH7-inner"
                                              >
                                                <div
                                                  className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-fQXmrHWmRqW3"
                                                  data-pm="normal"
                                                  data-sstype="row"
                                                >
                                                  <div
                                                    className="n2-ss-layer-row n2-ss-layer-with-background n-uc-fQXmrHWmRqW3-inner"
                                                  >
                                                    <div
                                                      className="n2-ss-layer-row-inner"
                                                    >
                                                      <div
                                                        className="n2-ss-layer n2-ow n-uc-9iIns52tIVHZ"
                                                        data-pm="default"
                                                        data-sstype="col"
                                                      >
                                                        <div
                                                          className="n2-ss-layer-col n2-ss-layer-with-background n2-ss-layer-content n-uc-9iIns52tIVHZ-inner"
                                                        >
                                                          <div
                                                            className="n2-ss-layer n2-ow n-uc-KrkAmYcTBPzB"
                                                            data-pm="normal"
                                                            data-sstype="layer"
                                                          >
                                                            <div
                                                              id="n2-ss-10item5"
                                                              className="n2-font-50dc700098640c141c34c6546eae3f8d-hover n2-style-f8293b450b12ef15d5c4ff97a617a3e3-heading n2-ss-item-content n2-ss-text n2-ow"
                                                              style={{
                                                                display: "block",
                                                              }}
                                                            >
                                                              <br />
                                                              <span
                                                                style={{
                                                                  fontWeight: 300,
                                                                  fontStyle: "bold",
                                                                }}
                                                              >
                                                                Invest in Hyderabad’s Emerging Growth Corridors
                                                              </span>
                                                              <br />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="n2-ss-slider-controls n2-ss-slider-controls-absolute-right-center"
                              >
                                <div
                                  style={{ "--widget-offset": "15px" } as React.CSSProperties}
                                  className="n2-ss-widget n2-style-9de64a8e0b54fae7f954a22251ebff19-heading nextend-arrow n2-ow-all nextend-arrow-next nextend-arrow-animated-fade"
                                  data-hide-mobileportrait="1"
                                  id="n2-ss-10-arrow-next"
                                  role="button"
                                  aria-label="next arrow"
                                  tabIndex={0}
                                >
                                  <img
                                    decoding="async"
                                    width="32"
                                    height="32"
                                    className="n2-arrow-normal-img skip-lazy"
                                    data-skip-lazy="1"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMC43MjIgNC4yOTNjLS4zOTQtLjM5LTEuMDMyLS4zOS0xLjQyNyAwLS4zOTMuMzktLjM5MyAxLjAzIDAgMS40MmwxMS4yODMgMTAuMjgtMTEuMjgzIDEwLjI5Yy0uMzkzLjM5LS4zOTMgMS4wMiAwIDEuNDIuMzk1LjM5IDEuMDMzLjM5IDEuNDI3IDBsMTIuMDA3LTEwLjk0Yy4yMS0uMjEuMy0uNDkuMjg0LS43Ny4wMTQtLjI3LS4wNzYtLjU1LS4yODYtLjc2TDEwLjcyIDQuMjkzeiIKICAgICAgICAgIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4="
                                    alt="next arrow"
                                  />
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width="32"
                                    height="32"
                                    className="n2-arrow-hover-img skip-lazy"
                                    data-skip-lazy="1"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMC43MjIgNC4yOTNjLS4zOTQtLjM5LTEuMDMyLS4zOS0xLjQyNyAwLS4zOTMuMzktLjM5MyAxLjAzIDAgMS40MmwxMS4yODMgMTAuMjgtMTEuMjgzIDEwLjI5Yy0uMzkzLjM5LS4zOTMgMS4wMiAwIDEuNDIuMzk1LjM5IDEuMDMzLjM5IDEuNDI3IDBsMTIuMDA3LTEwLjk0Yy4yMS0uMjEuMy0uNDkuMjg0LS43Ny4wMTQtLjI3LS4wNzYtLjU1LS4yODYtLjc2TDEwLjcyIDQuMjkzeiIKICAgICAgICAgIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4="
                                    alt="next arrow"
                                  />
                                </div>
                              </div>
                            </div>
                            <ss3-loader></ss3-loader>
                          </div>
                        </div>
                      </div>
                      <div className="n2_clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
