import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { setError } from "../../redux/slices/errorSlice";
import { useDispatch } from "react-redux";

export const ContactUs = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const isFormValid = () => {
    return (
      userName.trim() && userEmail.trim() && subject.trim() && message.trim()
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      // Показываем сообщение об ошибке, если форма не заполнена
      dispatch(setError("Please fill out all fields."));
      return; // Прерываем выполнение функции, чтобы не отправлять форму
    }

    emailjs
      .sendForm("service_by7zinn", "template_0vdx7pd", form.current, {
        publicKey: "4NVIl0iYxvKbUcJNT",
      })
      .then(
        () => {
          dispatch(setError("Your message has been sent"));
          setUserName("");
          setUserEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          dispatch(setError(error));
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <>
      <HeaderComponent hasFilter={false} />
      <div className={styles.mainContainer}>
        <h2>Contact Us</h2>
        <hr />
        <div className={styles.contactWrapper}>
          <div className={styles.contactContainer}>
            <div className={styles.contact}>
              <h3>Send us a message</h3>
              <form
                ref={form}
                onSubmit={sendEmail}
                className={styles.contactForm}
              >
                <div className={styles.row}>
                  <div className={styles.colMd6}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full name</label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className={styles.formControl}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.colMd6}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email address</label>
                      <input
                        type="text"
                        name="user_email"
                        placeholder="Email"
                        className={styles.formControl}
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.colMd12}>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject" placeholder="Subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className={styles.formControl}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.colMd12}>
                    <div className={styles.formGroup}>
                      <label htmlFor="message" placeholder="Message">
                        Message
                      </label>
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Message..."
                        cols={30}
                        rows={4}
                        aria-invalid="false"
                        className={styles.formControl}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.colMd12}>
                    <div className={styles.formGroup}>
                      <input
                        type="submit"
                        value="Send message"
                        className={styles.btn}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.map} id={styles.mapH}>
            <MapContainer
              center={[43.20842111555535, 76.66913153068846]}
              zoom={17}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[43.20842111555535, 76.66913153068846]}>
                <Popup>
                  <h2 className={styles.mapTitle}>SDU</h2>
                  <h3>University</h3>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};