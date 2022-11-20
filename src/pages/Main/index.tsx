import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import {
  Container,
  MainMenu,
  MenuContainer,
  PromoBanner,
  SecondMenu,
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
              <HiOutlineUserCircle size={42} />
              {/* <CgProfile size={55} /> */}
              <strong>olá, faça seu login ou cadastre-se </strong>
            </SingUpButton>

            <FaStore size={30} className="marginRight" />
            <AiFillHeart size={30} className="marginRight" />
            <FaShoppingBasket size={30} />
          </MainMenu>

          <SecondMenu>segundo menu</SecondMenu>
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
