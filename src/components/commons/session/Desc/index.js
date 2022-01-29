import React, { useContext } from "react";
import {
  WrapperSession,
  WrapperLeft,
  WrapperRight,
  WrapperButton,
} from "./styles";
import { Button } from "../../Button";
import Sensor from "../PreviewDesc";
import ScheduleDemo from "../../../ContentModal/ScheduleDemo";
import { PageContext } from "../../../Hooks";

export default function SessionDesc() {
  const { setIsOpenScheduleDemo } = useContext(PageContext);
  const [position, setPosition] = React.useState(0);
  return (
    <WrapperSession>
      <WrapperLeft>
        <h3>Manutenção preditiva descomplicada</h3>
        <h2>
          Mantenha a sua equipe e seus ativos com o <b>melhor desempenho</b>
        </h2>

        <Button color="#000" onClick={() => setPosition(0)}>
          <span>01</span>Sensor Plug & Play
        </Button>
        <Button color="#000" onClick={() => setPosition(1)}>
          <span>02</span>Monitoramento Online
        </Button>
        <Button color="#000" onClick={() => setPosition(2)}>
          <span>03</span>Gestão de Ativos
        </Button>
        <Button
          backgroundColor="#22c55e"
          color="#FFF"
          paddingLeft="20px"
          paddingRight="20px"
          onClick={() => setIsOpenScheduleDemo(true)}
        >
          Agende uma demonstração
        </Button>
      </WrapperLeft>
      <WrapperRight>
        <Sensor position={position} />
      </WrapperRight>
      <WrapperButton>
        <Button
          backgroundColor="#22c55e"
          color="#FFF"
          paddingLeft="20px"
          paddingRight="20px"
          marginTop="40px"
          onClick={() => setIsOpenScheduleDemo(true)}
        >
          Agende uma demonstração
        </Button>
      </WrapperButton>
      <ScheduleDemo />
    </WrapperSession>
  );
}
