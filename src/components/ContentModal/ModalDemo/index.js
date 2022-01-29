/* eslint-disable react/prop-types */
import React from "react";
import {
  WrapperContent,
  Content,
  ButtonClose,
  WrapperGroupCard,
  WrapperCards,
  Cards,
} from "./styles";
import { ButtonExit } from "../../svgs/Exit";
import Card from "../../commons/Card";

export function ModalDemo({ propsModal, onClose }) {
  return (
    <WrapperContent {...propsModal}>
      <ButtonClose
        onClick={() => {
          onClose();
        }}
      >
        <ButtonExit />
      </ButtonClose>
      <Content>
        <h2>Agende uma demonstração!</h2>
        <h3>
          Que tal conversar com um especialista e entender os benefícios que a
          Tractian pode oferecer para as suas operações de manutenção?
        </h3>
        <WrapperGroupCard>
          <WrapperCards>
            <p>Qual é a sua função?</p>
            <Cards>
              <Card>
                <img
                  src="https://imgix.tractian.com/images/icons/boss.png?auto=format&fit=max&w=128"
                  alt="Gerência de Manutenção-ícone"
                />
                <label>
                  <p>Gerência de Manutenção</p>
                </label>
              </Card>
              <Card>
                <img
                  src="https://imgix.tractian.com/images/icons/management.png?auto=format&fit=max&w=128"
                  alt="Supervisão de Manutenção-ícone"
                />
                <label>
                  <p>Supervisão de Manutenção</p>
                </label>
              </Card>
              <Card>
                <img
                  src="https://imgix.tractian.com/images/icons/laborers.png?auto=format&fit=max&w=128"
                  alt="Técnico de Manutenção"
                />
                <label>
                  <p>Técnico de Manutenção</p>
                </label>
              </Card>
              <Card>
                <img
                  src="https://imgix.tractian.com/images/icons/others.png?auto=format&fit=max&w=128"
                  alt="Outro-ícone"
                />
                <label>
                  <p>Outro</p>
                </label>
              </Card>
            </Cards>
          </WrapperCards>
        </WrapperGroupCard>
      </Content>
    </WrapperContent>
  );
}
