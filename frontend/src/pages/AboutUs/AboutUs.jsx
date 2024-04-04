import React from "react";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import styles from "./AboutUs.module.css";
import { ProfileCard } from "./ProfileCard";

export const AboutUs = () => {
  return (
    <>
      <HeaderComponent hasFilter={false} />
      <div className={styles.mainContainer}>
        <h2>About Us</h2>
        <hr />
        <p>
          We created HalalCheck with one goal in mind – to make it easier for
          you to comply with halal dietary restrictions. Our mission is to be
          your reliable guide in the world of products and establishments that
          meet high standards of halal.
        </p>
        <p>
          We strive to unite the Muslim community by providing you with access
          to verified information about halal products, a variety of categories
          and an interactive map of halal establishments. HalalCheck is not just
          a web platform, it is a community of people who share your beliefs
          about caring about what you eat and where you eat.
        </p>
        <p>
          Join HalalCheck, your guide to the world of halal nutrition. Together
          we create a community that shares not only information, but also
          inspiration to take care of ourselves and each other.
        </p>
        <p>
          Welcome to the HalalCheck family – your reliable partner on the way to
          halal principles!
        </p>
        <h2>Our team</h2>
        <hr />
        <div className={styles.profileCards}>
          <ProfileCard />
        </div>
      </div>
    </>
  );
};
