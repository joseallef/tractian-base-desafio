import React, { useContext } from "react";
import { Modal } from "../../commons/Modal";
import { PageContext } from "../../Hooks";
import {
  WrapperContent,
  Content,
  ButtonClose,
  WrapperImg,
  Input,
  WrapperLabel,
  ButtonSend,
  ImageMobile,
  ImageDesc,
  WrapperForm,
} from "./styles";
import { ButtonExit } from "../../svgs/Exit";
import { Button } from "../../commons/Button";

export default function ScheduleDemo() {
  const { isOpenScheduleDemo, setIsOpenScheduleDemo } = useContext(PageContext);
  const [userInfo, setInfo] = React.useState({
    nome: "",
    email: "",
    cargo: "",
    telefone: "",
  });
  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    setInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }
  return (
    <Modal
      isOpen={isOpenScheduleDemo}
      onClose={() => {
        setIsOpenScheduleDemo(false);
      }}
    >
      {(propsModal) => (
        <WrapperContent {...propsModal}>
          <ButtonClose
            onClick={() => {
              setIsOpenScheduleDemo(false);
            }}
          >
            <ButtonExit />
          </ButtonClose>
          <Content>
            <WrapperImg>
              <ImageMobile>
                <img
                  src="https://tractian.com/images/checkup-completo.png"
                  alt="Montagem da plataforma em diversas telas"
                />
              </ImageMobile>
              <ImageDesc>
                <img
                  src="https://tractian.com/images/screen-cellphone.png"
                  alt="Screen Cellphone"
                />
              </ImageDesc>
            </WrapperImg>
            <WrapperForm>
              <h2>Descubra como estão as máquinas da sua empresa!</h2>
              <form action="#">
                <label>Nome</label>
                <Input
                  type="text"
                  name="nome"
                  value={userInfo.nome}
                  onChange={handleChange}
                  placeholder="Insira seu nome"
                />
                <label>Cargo</label>
                <Input
                  type="text"
                  name="cargo"
                  value={userInfo.cargo}
                  onChange={handleChange}
                  placeholder="Insira seu cargo"
                />
                <label>E-mail profissional</label>
                <Input
                  type="text"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  placeholder="Insira seu e-mail profissional"
                />
                <label>Telefone</label>
                <Input
                  type="text"
                  name="telefone"
                  value={userInfo.telefone}
                  onChange={handleChange}
                  placeholder="(XX) XXXX-XXXX"
                />
                <span>O que mais te interessou nas nossas soluções?</span>
                <WrapperLabel>
                  <label htmlFor="Smart-Trac">
                    <Input
                      type="radio"
                      name="solution"
                      value=""
                      id="Smart-Trac"
                    />
                    Monitoramento Online e Sensores
                  </label>
                </WrapperLabel>
                <WrapperLabel>
                  <label htmlFor="TracOS">
                    <Input type="radio" name="solution" value="" id="TracOS" />
                    Software de Gestão de Manutenção e PCM
                  </label>
                </WrapperLabel>
                <WrapperLabel>
                  <label htmlFor="all">
                    <Input type="radio" name="solution" value="" id="all" />
                    Todas as Soluções
                  </label>
                </WrapperLabel>
                <ButtonSend>
                  <Button backgroundColor="#22c55e">Enviar</Button>
                </ButtonSend>
              </form>
            </WrapperForm>
          </Content>
        </WrapperContent>
      )}
    </Modal>
  );
}
