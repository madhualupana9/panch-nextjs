import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainSlider from "@/components/MainSlider";
import AboutUs from "@/components/AboutUs";
import OurProjects from "@/components/OurProjects";
import MobileMenu from "@/components/MobileMenu";
import PassionateSection from "@/components/PassionateSection";
import PlanningSection from "@/components/PlanningSection";
import Script from "next/script";

export default function Home() {
  return (
    <div className="body_wrap">
      <div className="page_wrap">
        <Header />
        <MobileMenu />
        
        <main className="page_content_wrap">
          <div className="content_wrap_fullscreen">
            <div className="content">
              <article className="post_item_single post_type_page status-publish hentry">
                <div className="post_content entry-content">
                  <div className="elementor elementor-26735">
                    <MainSlider />
                    
                    <PassionateSection />
                    
                    <PlanningSection />
                    
                    <AboutUs />
                    <OurProjects />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* External Scripts for animations and legacy template features */}
      
      {/* Elementor Configs */}
      <Script id="elementor-frontend-config-before" strategy="beforeInteractive">
        {`
          window.elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1280,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1279,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":true},"version":"3.33.4","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"theme_builder_v2":true,"home_screen":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"cloud-library":true,"e_opt_in_v4_page":true,"import-export-customization":true},"urls":{"assets":"/assests/js/","ajaxurl":"","uploadUrl":""},"nonces":{"floatingButtonsClickTracking":"a84ddbdc3c"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"stretched_section_container":".page_wrap","viewport_tablet":1279,"active_breakpoints":["mobile","tablet","laptop"],"viewport_laptop":1366,"viewport_mobile":767}};
          window.ElementorProFrontendConfig = {"ajaxurl":"","nonce":"05abaf720f","urls":{"assets":"/assests/js/","rest":""},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":false},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":""}};
        `}
      </Script>

      <Script src="/assests/js/script.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/ays-pb-public.js" strategy="afterInteractive" />
      <Script src="/assests/js/hooks.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/i18n.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/rbtools.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/rs6.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/purify.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/jquery.fancybox.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/jquery.easing.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/jquery.mousewheel.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/jquery.bind-first-0.2.3.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/tld.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/gsap.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/webpack.runtime.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/frontend-modules.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/core.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/swiper.min.js" strategy="afterInteractive" />

      <Script id="n2-ss-init" strategy="afterInteractive">
        {`
          window._N2 = window._N2 || {_r: [], _d: [], r: function() { this._r.push(arguments); }, d: function() { this._d.push(arguments); } };
          _N2.r("documentReady", function () {
              _N2.r(["documentReady", "smartslider-frontend", "SmartSliderWidgetArrowImage", "ss-simple"], function () {
                  if (document.getElementById("n2-ss-10")) {
                      new _N2.SmartSliderSimple("n2-ss-10", {
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
                              new _N2.SmartSliderWidgetArrowImage(this);
                          },
                      });
                  }
              });
          });
        `}
      </Script>

      <Script id="swiper-init" strategy="afterInteractive">
        {`
          window.addEventListener('load', function() {
            if (window.Swiper) {
              document.querySelectorAll('.elementor-main-swiper').forEach(function(el) {
                var settings = el.closest('.elementor-widget-testimonial-carousel')?.getAttribute('data-settings');
                if (settings) {
                  settings = JSON.parse(settings);
                  new Swiper(el, {
                    slidesPerView: parseInt(settings.slides_per_view) || 1,
                    spaceBetween: settings.space_between?.size || 0,
                    loop: settings.loop === 'yes',
                    autoplay: settings.autoplay === 'yes' ? {
                      delay: settings.autoplay_speed || 5000,
                      disableOnInteraction: settings.pause_on_interaction === 'yes'
                    } : false,
                    navigation: settings.show_arrows === 'yes' ? {
                      nextEl: '.elementor-swiper-button-next',
                      prevEl: '.elementor-swiper-button-prev',
                    } : false,
                    pagination: settings.show_pagination === 'yes' ? {
                      el: '.swiper-pagination',
                      clickable: true,
                    } : false,
                  });
                }
              });
            }
          });
        `}
      </Script>


      {/* Main Template and Elementor Scripts */}
      <Script src="/assests/js/__scripts.js" strategy="afterInteractive" />
      <Script src="/assests/js/mouse-helper.js" strategy="afterInteractive" />
      <Script src="/assests/js/superfish.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/frontend1.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/__scripts1.js" strategy="afterInteractive" />
      <Script src="/assests/js/skin.js" strategy="afterInteractive" />
      <Script src="/assests/js/webpack-pro.runtime.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/frontend.min.js" strategy="afterInteractive" />
      <Script src="/assests/js/elements-handlers.min.js" strategy="afterInteractive" />
    </div>
  );
}
