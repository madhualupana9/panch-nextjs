export default function AboutUs() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-a5401a5 elementor-section-boxed sc_fly_static about-us-section"
      data-id="a5401a5"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        {/* LEFT COLUMN (60%) */}
        <div
          className="elementor-column elementor-col-60 elementor-top-column elementor-element elementor-element-d529f19"
          data-id="d529f19"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-c266854 sc_fly_static elementor-widget elementor-widget-heading"
              data-id="c266854"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  About Us
                </h2>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-d67b7e3 sc_fly_static elementor-widget elementor-widget-text-editor about-text"
              data-id="d67b7e3"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Paanchajanya Reality Pvt Ltd, founded by Mr. Rajender Reddy in
                  2009, has established itself as a leading provider of Villa
                  Plots in Hyderabad, Shirdi, Bangalore, and Bangkok. Over the
                  years, the company has sold thousands of plots, growing from
                  its initial project of 2000 plots to delivering over 11 lakh
                  square yards.
                </p>
                <p>
                  The company’s success is built upon its commitment to passing
                  on the benefits of its cost-efficiency to its customers. This
                  principle, along with constant efforts to improve the
                  community and positively impact lives, has driven its success
                  for over 25 years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (40%) */}
        <div
          className="elementor-column elementor-col-40 elementor-top-column elementor-element elementor-element-b6574a6 align-middle founder-box"
          data-id="b6574a6"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-c68962c sc_fly_static elementor-widget elementor-widget-image"
              data-id="c68962c"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="1146"
                  height="1465"
                  src="/assests/image/Rajender.png"
                  className="attachment-full size-full wp-image-26510"
                  alt="founder"
                />
              </div>
            </div>

            <div
              className="elementor-element elementor-element-396558f sc_fly_static elementor-widget elementor-widget-heading founder-name"
              data-id="396558f"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <p className="elementor-heading-title elementor-size-default">
                  Mr. Rajender Reddy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
