import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Telegram,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const socialMediaLinks = {
  facebook: "https://www.facebook.com/groups/1840392419778175",
  instagram: "https://www.instagram.com/ваш_профиль_instagram",
  telegram: "https://t.me/ftreasures", 
  pinterest: "https://www.pinterest.com/ваш_профиль_pinterest",
};

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>forgotten treasures.</Logo>
        <Desc>
          Welcome to Forgotten Treasures online shop, where the past meets the present! 
          We offer a unique collection of antique items that will fill your home with history and unique charm.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999" onClick={() => window.open(socialMediaLinks.facebook, "_blank")}>
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F" onClick={() => window.open(socialMediaLinks.instagram, "_blank")}>
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE" onClick={() => window.open(socialMediaLinks.telegram, "_blank")}>
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60023" onClick={() => window.open(socialMediaLinks.pinterest, "_blank")}>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Book</ListItem>
          <ListItem>Painting</ListItem>
          <ListItem>Servings</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +375 (29) 167 27 38
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> ftreasures@mail.ru
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
