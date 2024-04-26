import { Box, ListItemButton, ListItemIcon } from "@mui/material";
import instagramIcon from "../../assets/pictures/svg/instagram.svg";
import facebookIcon from "../../assets/pictures/svg/facebook.svg";
import telegramIcon from "../../assets/pictures/svg/telegram.svg";
import emailIcon from "../../assets/pictures/svg/email.svg";
import phoneIcon from "../../assets/pictures/svg/phone.svg";
import viberIcon from "../../assets/pictures/svg/viber.svg";

const SocialMediaIcons = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>
      <ListItemButton href="tel:+380632715551">
        <ListItemIcon>
          <img src={phoneIcon} alt="Phone Icon" />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton href="viber://chat?number=+380632715551">
        <ListItemIcon>
          <img src={viberIcon} alt="Viber Icon" />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton href="https://telegram.me/Ksumudrenok">
        <ListItemIcon>
          <img src={telegramIcon} alt="Telegram Icon" />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton href="mailto:info@extras.com.ua">
        <ListItemIcon>
          <img src={emailIcon} alt="Email Icon" />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton
        href="https://instagram.com/extra_executive_services?igshid=OGQ5ZDc2ODk2ZA=="
        target="_blank"
      >
        <ListItemIcon>
          <img src={instagramIcon} alt="Instagram Icon" />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton
        href="https://www.facebook.com/extrasukraine"
        target="_blank"
      >
        <ListItemIcon>
          <img src={facebookIcon} alt="Facebook Icon" />
        </ListItemIcon>
      </ListItemButton>
    </Box>
  );
};

export default SocialMediaIcons;
