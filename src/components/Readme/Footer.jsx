import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/bhavishya-khemnani-a558a228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/Bobysoni199" icon={BsGithub} />
          <Footer.Icon
            href="mailto:mahmoud2abdalfattah@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon href="" icon={BsTelegram} />
          <Footer.Icon
            href=""
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
