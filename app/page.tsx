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
          window.awsmJobsPublic = {"ajaxurl":"","is_admin":"", "vendors": {}, "i18n": {"form_error_msg": {"general": "Error"}}, "is_search": "", "deep_linking": {"search": false, "spec": false}};
          window.pysOptions = {"staticEvents":[],"dynamicEvents":[],"triggerEvent":[],"triggerDynamicEvent":[],"triggerDynamicEvents":[],"google_analytics":{"enabled":false},"facebook":{"enabled":false},"pixel_your_site":{"enabled":false}, "gdpr": {}};
          window.elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1280,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1279,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":true},"version":"3.33.4","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"theme_builder_v2":true,"home_screen":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"cloud-library":true,"e_opt_in_v4_page":true,"import-export-customization":true},"urls":{"assets":"","ajaxurl":"","uploadUrl":""},"nonces":{"floatingButtonsClickTracking":"a84ddbdc3c"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"stretched_section_container":".page_wrap","viewport_tablet":1279,"active_breakpoints":["mobile","tablet","laptop"],"viewport_laptop":1366,"viewport_mobile":767}};
          window.ElementorProFrontendConfig = {"ajaxurl":"","nonce":"05abaf720f","urls":{"assets":"","rest":""},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":false},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":""}};
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
