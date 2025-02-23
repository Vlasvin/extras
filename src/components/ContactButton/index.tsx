import { createPortal } from "react-dom";
import phoneIcon from "assets/pictures/svg/telephone.png";
import { Image, PhoneLink } from "./ContactButtonStyled";

const modalRoot = document.querySelector("#modal-root")!;

const ContactPhoneButton = () => {
  return createPortal(
    <PhoneLink href="tel:+380632715551">
      <Image src={phoneIcon} alt="Phone Icon" />
    </PhoneLink>,
    modalRoot
  );
};

export default ContactPhoneButton;
