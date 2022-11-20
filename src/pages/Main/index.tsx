import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import {
  Container,
  UpMenu,
  MenuContainer,
  PromoBanner,
  DownMenu,
  SingUpButton,
  Tag,
  Icons,
} from './styles';
import appBanner from '../../assets/mainpage/app.webp';
import blackFridayBanner from '../../assets/mainpage/black_friday.webp';
import christmasBanner from '../../assets/mainpage/christmas.webp';
import etiquetaBlack from '../../assets/mainpage/etiqueta_black.webp';
import { BsBasket, BsHeart } from 'react-icons/bs';
import { IoStorefrontOutline } from 'react-icons/io5';
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
          <UpMenu>
            <a>
              <img src={logo} alt="logo" />
            </a>

            <Input></Input>

            <SingUpButton>
              <HiOutlineUserCircle size={65} />
              {/* <CgProfile size={55} /> */}
              <strong>olá, faça seu login ou cadastre-se </strong>
            </SingUpButton>

            <Icons>
              <a href="#">
                <IoStorefrontOutline size={25} className="icon MarginRight" />
              </a>
              <a href="#">
                <BsHeart size={25} className="icon MarginRight" />
              </a>
              <a href="#">
                <BsBasket size={25} />
              </a>
            </Icons>
          </UpMenu>

          <DownMenu>segundo menu</DownMenu>
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
