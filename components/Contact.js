import Iframe from "react-iframe";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <div
        className="w3-padding-16 w3-content w3-text-grey w3-justify"
        id="contact"
      >
        <h2 className="w3-text-light-grey w3-center">Contact Us</h2>
        <hr className="w3-opacity w3-width-100" />

        <p>
          <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
            {" "}
          </i>{" "}
          Email: office@programerika.com
        </p>
        <p>
          <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
          Bulevar Zorana Djindjica 109-II, Belgrade, Serbia
        </p>
        <Iframe
          title="Google map with pointer to Programerika address."
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.20328584413!2d20.416029315498456!3d44.81742307909854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a656478659f87%3A0x9aab1cfb873e04ea!2zQnVsZXZhciBab3JhbmEgxJBpbsSRacSHYSAxMDksIEJlb2dyYWQ!5e0!3m2!1sen!2srs!4v1624359442524!5m2!1sen!2srs"
          width="100%"
          height="450"
          id="myId"
          className="w3-margin-top"
          display="initial"
          position="relative"
        />
      </div>
      <br />
      
    </>
  );
};

export default Contact;
