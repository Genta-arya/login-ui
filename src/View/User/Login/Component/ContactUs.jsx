import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../../../../Asset/marker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const centerCoordinates = [-6.982525200371022, 110.40924371154264];

  const markerPosition = {
    lat: -6.982525200371022,
    lng: 110.40924371154264,
  };

  const udinusIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
  });

  return (
    <div className="py-6 bg-[#1153A1] text-white">
      <div className="container mx-auto p-4 lg:flex justify-center items-center md:flex">
        <div className="lg:w-1/4 mb-4 lg:mb-0 text-center lg:text-left">
          <img
            src="https://portal.dinus.ac.id/assets/images/Logo%20Udinus%20-%20Official%2002.png"
            alt="Udinus Logo"
            className="w-52 h-52  md:ml-40  ml-16 -mr-2"
          />
        </div>

        <div className="lg:w-1/2 mb-4">
          <MapContainer
            center={centerCoordinates}
            zoom={15}
            style={{ width: "80%", height: "400px" }}
            className="md:ml-40 ml-9 mt-6 mb-6"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={markerPosition} icon={udinusIcon}>
              <Popup autoOpen={true}>
                <div>
                  <h2 className="text-xl font-semibold">
                    Universitas Dian Nuswantoro
                  </h2>
                  <p>
                    Jl. Imam Bonjol No. 207, Pendrikan Kidul, Kec. Semarang
                    Tengah, Kota Semarang, Jawa Tengah 50131
                  </p>
                  <p>
                    <span style={{ color: "gold", fontSize: "20px" }}>★</span>
                    <span style={{ color: "gold", fontSize: "20px" }}>★</span>
                    <span style={{ color: "gold", fontSize: "20px" }}>★</span>
                    <span style={{ color: "gold", fontSize: "20px" }}>
                      ★
                    </span>{" "}
                    <span className="text-[#1a73e8]">(1,271 ulasan)</span>
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=-6.982525200371022,110.40924371154264"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat peta lebih besar
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="lg:w-1/4 text-start md:text-center lg:text-left md:ml-12 p-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: "#ffc600", marginRight: 5 }}
              />
              Main Campus: 207 Imam Bonjol <span className="ml-6">Street</span>
              <br />
            </div>
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: "#ffc600", marginRight: 5 }}
              />{" "}
              Other Campus: 5-11 Nakula I Street
              <br />
            </div>
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#ffc600", marginRight: 5 }}
              />{" "}
              Phone: (024) 3517261
              <br />
            </div>
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#ffc600", marginRight: 5 }}
              />{" "}
              Email: sekretariat@dinus.ac.id
            </div>
          </p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 640px) {
            .lg:flex {
              flex-direction: column;
            }
            .leaflet-container {
              width: 80%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;
