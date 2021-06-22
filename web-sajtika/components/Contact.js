const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
        <h2 className="w3-text-light-grey w3-center">Contact Me</h2>
        <hr style={{ width: "200px" }} className="w3-opacity" />
        <div className="w3-section">
          <p>
            <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
            Bulevar Zorana Djindjica 109-II, Belgrade, Serbia
          </p>
          <p>
            <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
            Phone: +00 151515
          </p>
          <p>
            <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
              {" "}
            </i>{" "}
            Email: mail@mail.com
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Contact;
