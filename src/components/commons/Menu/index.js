import React, { useContext, useEffect, useState } from "react";
import ButtonToggle from "../../svgs/ButtonToggleMobile";
import ToggleArrow from "../../svgs/ToggleArrow";
import {
  Wrapper,
  MenuWrapper,
  ButtonRightSideMobile,
  MenuWrapperRightSideMobile,
  WrapperContentNavbar,
  WrapperNav,
  Select,
  ContainerContent,
} from "./styles/MenuWrapper";
import { Button } from "../Button";
import { PageContext } from "../../Hooks";
import { ButtonClose } from "../../ContentModal/ModalDemo/styles";
import { ButtonExit } from "../../svgs/Exit";
import ContentSolutions from "../MenuContent/Solutions";
import ContentAbout from "../MenuContent/About";
import ContentFreeMaterial from "../MenuContent/FreeMaterial";
import { ModalDemo } from "../../ContentModal/ModalDemo";
import { Modal } from "./../Modal/index";

export default function Menu() {
  const { setIsModalOpen, isModalOpen, isOpenMenu, setIsOpenMenu } =
    useContext(PageContext);
  const [menuColor, setMenuColor] = useState("transparent");
  const [isOpenMenuOptions, setIsOpenMenuOptions] = useState(false);
  const [isOpenMenuAbout, setIsOpenMenuAbout] = useState(false);
  const [isOpenMenuMaterial, setIsOpenMenuMaterial] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setMenuColor("#1e3a8a");
      } else {
        setMenuColor("transparent");
      }
    });
  }, []);
  return (
    <Wrapper backgroundColor={menuColor}>
      <Wrapper.LeftSide>
        <img src="https://imgix.tractian.com/images/Logo-Tractian.svg?auto=format&fit=max&w=256" />
      </Wrapper.LeftSide>
      <MenuWrapper>
        <MenuWrapper.CenterSide>
          <Button
            onClick={() => {
              setIsOpenMenuOptions(!isOpenMenuOptions);
              setIsOpenMenuAbout(false);
              setIsOpenMenuMaterial(false);
            }}
            padding="0"
          >
            <span>Soluções</span>
            <ToggleArrow />
          </Button>
          <Button
            onClick={() => {
              setIsOpenMenuAbout(!isOpenMenuAbout);
              setIsOpenMenuOptions(false);
              setIsOpenMenuMaterial(false);
            }}
          >
            <span>Sobre Nós</span>
            <ToggleArrow />
          </Button>
          <Button
            onClick={() => {
              setIsOpenMenuMaterial(!isOpenMenuMaterial);
              setIsOpenMenuOptions(false);
              setIsOpenMenuAbout(false);
            }}
          >
            <span>Materiais Gratuitos</span>
            <ToggleArrow />
          </Button>
          <Button href="#">Blog</Button>
          <select name="language">
            <option value="">PT</option>
            <option value="">EN</option>
            <option value="">ES</option>
          </select>
        </MenuWrapper.CenterSide>
        <MenuWrapper.RightSide>
          <Button href="#">Área do Cliente</Button>
          <Button
            backgroundColor="#22c55e"
            paddingRight="22px"
            paddingLeft="22px"
            fontWeight="500"
            onClick={() => setIsModalOpen(true)}
          >
            Demonstração
          </Button>
        </MenuWrapper.RightSide>
      </MenuWrapper>
      <ContentSolutions isOpen={isOpenMenuOptions} />
      <ContentAbout isOpen={isOpenMenuAbout} />
      <ContentFreeMaterial isOpen={isOpenMenuMaterial} />
      <ButtonRightSideMobile onClick={() => setIsOpenMenu(true)}>
        <ButtonToggle />
      </ButtonRightSideMobile>
      <MenuWrapperRightSideMobile isOpen={isOpenMenu}>
        <WrapperContentNavbar>
          <Wrapper.LeftSide>
            <img src="https://tractian.com/images/logotractianazul.svg" />
          </Wrapper.LeftSide>
          <ButtonClose
            onClick={() => {
              setIsOpenMenu(false);
              setIsOpenMenuOptions(false);
              setIsOpenMenuAbout(false);
              setIsOpenMenuMaterial(false);
            }}
          >
            <ButtonExit />
          </ButtonClose>
        </WrapperContentNavbar>
        <ContainerContent>
          <WrapperNav>
            <Button
              color="#000"
              onClick={() => setIsOpenMenuOptions(!isOpenMenuOptions)}
            >
              <span>Soluções</span>
              <ToggleArrow />
            </Button>
            <ContentSolutions isOpen={isOpenMenuOptions} />
            <Button
              color="#000"
              onClick={() => setIsOpenMenuAbout(!isOpenMenuAbout)}
            >
              <span>Sobre Nós</span>
              <ToggleArrow />
            </Button>
            <ContentAbout isOpen={isOpenMenuAbout} />
            <Button
              color="#000"
              onClick={() => setIsOpenMenuMaterial(!isOpenMenuMaterial)}
            >
              <span>Materiais Gratuitos</span>
              <ToggleArrow />
            </Button>
            <ContentFreeMaterial isOpen={isOpenMenuMaterial} />
            <Button href="#" color="#000">
              Blog
            </Button>
            <Button href="#" color="#000">
              Área do Cliente
            </Button>
            <Select>
              <select name="language">
                <option value="">PT</option>
                <option value="">EN</option>
                <option value="">ES</option>
              </select>
            </Select>
            <Button
              backgroundColor="#1d4ed8"
              paddingRight="22px"
              paddingLeft="22px"
              fontWeight="500"
              onClick={() => setIsModalOpen(true)}
            >
              Demonstração
            </Button>
          </WrapperNav>
        </ContainerContent>
      </MenuWrapperRightSideMobile>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {(props) => (
          <ModalDemo
            propsModal={props}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        )}
      </Modal>
    </Wrapper>
  );
}
