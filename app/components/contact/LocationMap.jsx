import React from "react";

const LocationMap = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-neutral-950 text-5xl font-normal font-nohemi mt-32 xs:px-5">Get in touch With Us!</h2>
        <p className="text-center text-neutral-950 text-base font-normal font-primary leading-normal lg:w-[30%] sm:w-[65%] xs:w-[80%] mx-auto mt-3 xs:px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
        <div className="mt-14 h-[600px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14495.85232539756!2d54.7278259!3d24.7281477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5effd1737a9a77%3A0x4bdf4e512ac74a2a!2sSafe%20Care%20Medical%20Industry!5e0!3m2!1sen!2s!4v1723027491491!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen />
        </div>
      </div>
    </>
  );
};

export default LocationMap;
