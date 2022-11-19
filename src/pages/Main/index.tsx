import React from 'react';
import { CgProfile } from 'react-icons/cg';
import {
  Container,
  MainMenu,
  MenuContainer,
  PromoBanner,
  SingUpButton,
  Tag,
} from './styles';
import appBanner from '../../assets/mainpage/app.webp';
import blackFridayBanner from '../../assets/mainpage/black_friday.webp';
import christmasBanner from '../../assets/mainpage/christmas.webp';
import etiquetaBlack from '../../assets/mainpage/etiqueta_black.webp';
import { FaStore, FaShoppingBasket } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
export const MainPage: React.FC = () => {
  return (
    <>
      <Container>
        <Tag>
          <img src={etiquetaBlack} alt="etiqueta_black" />
        </Tag>

        <MenuContainer>
          <MainMenu>
            <img src={logo} alt="logo" />

            <Input></Input>

            <SingUpButton>
              <CgProfile size={55} values=" className: react-icons" />
              <strong>olá, faça seu login ou cadastre-se </strong>

              {/* <a href="#">olá, faça seu login ou cadastre-se</a> */}
            </SingUpButton>

            <FaStore size={30} />
            <AiFillHeart size={30} />
            <FaShoppingBasket size={30} />
          </MainMenu>
        </MenuContainer>

        <PromoBanner>
          <img src={appBanner} alt="app" />

          <img src={christmasBanner} alt="christmas" />

          <img src={blackFridayBanner} className="black" alt="black" />
        </PromoBanner>
      </Container>
    </>
  );
};
