import React from "react";
import { WrapperSensor } from "./styles";

const data = [
  {
    img: "https://imgix.tractian.com/images/cole-o-sensor.png?auto=format&fit=max&w=828",
    title: "Tecnologia IoT avançada para conectar seus ativos",
    description:
      "Nossos sensores enviam dados do seu equipamento através de rede 3g/4g Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.",
  },
  {
    img: "https://imgix.tractian.com/images/features-header.png?auto=format&fit=max&w=1200",
    title: "Plataforma que trabalha por você",
    description:
      "Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.",
  },
  {
    img: "https://imgix.tractian.com/trac-os/automacoes-e-metricas.png?auto=format&fit=max&w=640",
    title: "O Software de manutenção dos seus sonhos",
    description:
      "Use procedimentos online para organizar checklists e inspeções. Centralize a rotina do seu time e potencialize as atividades de cada colaborador através das automações e métricas.",
  },
];

export default function Sensor({ position }) {
  return (
    <WrapperSensor>
      <WrapperSensor.WrapperImg>
        <img src={data[position].img} alt={data[position].title} />
      </WrapperSensor.WrapperImg>
      <h4>{data[position].title}</h4>
      <p>{data[position].description}</p>
    </WrapperSensor>
  );
}
