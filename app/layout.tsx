import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Paanchajanya Eco Villages - Buy Luxury Apartments, Villas and More!",
  description: "PAANCHAJANYA REALITY is one of the leading real estate developers in Hyderabad. Here we have projects like Urban Elite, Premium County, and more. Explore Now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="no-js scheme_light">
          <head>
            <meta charSet="UTF-8" />
            <meta name="format-detection" content="telephone=no" />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="trx_addons-icons-css"
              href="/assests/css/trx_addons_icons.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="qw_extensions-icons-css"
              href="/assests/css/qw_extension_icons.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="balance-font-google_fonts-css"
              href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&subset=latin,latin-ext&display=swap"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="balance-fontello-css"
              href="/assests/css/fontello.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="awsm-jobs-general-css"
              href="/assests/css/general.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="awsm-jobs-style-css"
              href="/assests/css/style.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="pb_animate-css"
              href="/assests/css/animate.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="bootstrap-css-css"
              href="/assests/css/bootstrap.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="bootstrap-icons-css"
              href="/assests/css/bootstrap-icons.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="custom-plugin-style-css"
              href="/assests/css/style.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="rt-fontawsome-css"
              href="/assests/css/font-awesome.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="swiper-css-css"
              href="/assests/css/swiper-bundle.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="fancybox-css"
              href="/assests/css/jquery.fancybox.min.css"
              type="text/css"
              media="screen"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="trx_addons-css"
              href="/assests/css/mainstyles.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="trx_addons-sc_content-css"
              href="/assests/css/content.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="trx_addons-sc_content-responsive-css"
              href="/assests/css/content.responsive.css"
              type="text/css"
              media="(max-width:1439px)"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="trx_addons-animations-css"
              href="/assests/css/trx_addons.animations.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="trx_addons-mouse-helper-css"
              href="/assests/css/mouse-helper.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="trx_addons-mouse-helper-responsive-css"
              href="/assests/css/mouse-helper.responsive.css"
              type="text/css"
              media="(max-width:1279px)"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-icons-css"
              href="/assests/css/elementor-icons.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-frontend-css"
              href="/assests/css/custom-frontend.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-frontend-inline-css"
              href="/assests/css/elementor-inline.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="sbistyles-css"
              href="/assests/css/sbi-styles.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="widget-heading-css"
              href="/assests/css/widget-heading.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="e-motion-fx-css"
              href="/assests/css/motion-fx.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="widget-image-css"
              href="/assests/css/widget-image.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="e-animation-slideInUp-css"
              href="/assests/css/slideInUp.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="widget-spacer-css"
              href="/assests/css/widget-spacer.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="swiper-css"
              href="/assests/css/swiper.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="e-swiper-css"
              href="/assests/css/e-swiper.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="widget-testimonial-carousel-css"
              href="/assests/css/custom-pro-widget-testimonial-carousel.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="widget-carousel-module-base-css"
              href="/assests/css/widget-carousel-module-base.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="widget-divider-css"
              href="/assests/css/widget-divider.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="ays-pb-min-css"
              href="/assests/css/ays-pb-public-min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="rs-plugin-settings-css"
              href="/assests/css/rs6.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="smartslider-css"
              href="/assests/css/smartslider.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="balance-skin-default-css"
              href="/assests/css/style2.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="balance-plugins-css"
              href="/assests/css/plugins.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="balance-custom-css"
              href="/assests/css/custom.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="balance-responsive-css"
              href="/assests/css/responsive.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="balance-skin-upgrade-styledefault-css"
              href="/assests/css/skin-upgrade-style.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-gf-local-roboto-css"
              href="/assests/css/roboto.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-gf-local-robotoslab-css"
              href="/assests/css/robotoslab.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-gf-local-poppins-css"
              href="/assests/css/poppins.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-icons-shared-0-css"
              href="/assests/css/fontawesome.min.css"
              type="text/css"
              media="all"
            />
            <link
              property="stylesheet"
              rel="stylesheet"
              id="elementor-icons-fa-brands-css"
              href="/assests/css/brands.min.css"
              type="text/css"
              media="all"
            />
          </head>
          <body className="home page-template-default page page-id-26735 wp-custom-logo sp-easy-accordion-enabled rttpg rttpg-7.7.19 radius-frontend rttpg-body-wrap rttpg-flaticon frontpage skin_default scheme_light blog_mode_front body_style_fullscreen is_stream blog_style_classic_3 sidebar_hide expand_content remove_margins trx_addons_present header_type_custom header_style_header-custom-20908 header_position_over menu_side_none no_layout fixed_blocks_sticky elementor-default elementor-kit-15 elementor-page elementor-page-26735">
            <Script src="/assests/js/jquery.min.js" strategy="beforeInteractive" />
            <Script src="/assests/js/jquery-migrate.min.js" strategy="beforeInteractive" />
            <Script id="n2-init" strategy="beforeInteractive">
              {`
                (function () {
                    this._N2 = this._N2 || {
                        _r: [],
                        _d: [],
                        r: function () {
                            this._r.push(arguments);
                        },
                        d: function () {
                            this._d.push(arguments);
                        },
                    };
                }).call(window);
              `}
            </Script>
            <Script src="/assests/js/n2.min.js" strategy="beforeInteractive" />
            <Script src="/assests/js/smartslider-frontend.min.js" strategy="beforeInteractive" />
            <Script src="/assests/js/ss-simple.min.js" strategy="beforeInteractive" />
            <Script src="/assests/js/w-arrow-image.min.js" strategy="beforeInteractive" />
            
            {children}
    
            <Script src="/assests/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/jquery.fancybox.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/rs6.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/script.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/core.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/elements-handlers.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/frontend-modules.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/frontend.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/gsap.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/hooks.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/i18n.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/jquery.bind-first-0.2.3.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/jquery.easing.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/jquery.mousewheel.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/js.cookie-2.1.3.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/mediaelement-and-player.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/mediaelement-migrate.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/mouse-helper.js" strategy="lazyOnload" />
            <Script src="/assests/js/public.js" strategy="lazyOnload" />
            <Script src="/assests/js/purify.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/rbtools.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/skin.js" strategy="lazyOnload" />
            <Script src="/assests/js/superfish.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/swiper.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/tld.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/webpack-pro.runtime.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/webpack.runtime.min.js" strategy="lazyOnload" />
            <Script src="/assests/js/wp-mediaelement.min.js" strategy="lazyOnload" />
          </body>
        </html>  );
}
