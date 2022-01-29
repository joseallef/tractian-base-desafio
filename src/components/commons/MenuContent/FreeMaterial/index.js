/* eslint-disable react/prop-types */
import React from "react";
import {
  BoxContent,
  CardOptions,
  WrapperText,
  CardOptionsMaterial,
  CardOptionsMaterialLeft,
} from "../Solutions/styles";
import { Grid } from "../../../layout/Grid";
import { Button } from "../../Button";

export default function ContentFreeMaterial({ isOpen }) {
  return (
    <BoxContent isOpen={isOpen}>
      <Grid.Container
        display="flex"
        flexDirection="column"
        flex="1"
        marginLeft="0px"
        marginRight="0px"
        paddingRight="0px"
        paddingLeft="0px"
      >
        <Grid.Col
          marginTop="30px"
          paddingBottom="30rem"
          display="block"
          flexGrow="2"
        >
          <Grid.Row
            display="block"
            textAlign="left"
            borderBottom="1px solid #1e40af"
            paddingBottom=".5rem"
            marginTop="20px"
            marginLeft="20px"
          >
            <p>E-BOOKS E GUIAS</p>
          </Grid.Row>
          <Grid.Row
            padding="5px"
            marginLeft="20px"
            display="block"
            marginTop="20px"
          >
            <CardOptionsMaterial>
              <p>Indicadores de manutenção</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Manutenção Preditiva</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>CMMS</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Em busca do Downtime Zero</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Decisão Baseada em Dados</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Monitoramento e Análise de Vibração</p>
            </CardOptionsMaterial>
            <Button color="#1d4ed8" border="1px solid" marginTop="20px">
              Ver todos os guias
            </Button>
          </Grid.Row>
          <Grid.Row
            display="block"
            textAlign="left"
            borderBottom="1px solid #1e40af"
            paddingBottom=".5rem"
            marginTop="20px"
            marginLeft="20px"
          >
            <p>CHECKLISTS</p>
          </Grid.Row>
          <Grid.Row padding="5px" marginLeft="20px" display="flex">
            <CardOptionsMaterial>
              <p>Segurança de Trabalho</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Inspeção Geral de Incêndio</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Verificação de Avaliação de Perigo</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Perigo de Encanamento</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Verificação e Segurança das Máquinas</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Logística e Transporte</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Processos Industriais</p>
            </CardOptionsMaterial>
            <CardOptionsMaterial>
              <p>Gestão de Qualidade</p>
            </CardOptionsMaterial>
            <Button color="#1d4ed8" border="1px solid" marginTop="20px">
              Ver todos os checklists
            </Button>
          </Grid.Row>
        </Grid.Col>

        <Grid.Col
          backgroundColor="#e2e8f0"
          marginLeft="10px"
          marginRight="-20px"
          padding="20px"
          paddingRight="50px"
          display="block"
          width="30%"
        >
          <Grid.Row
            display="block"
            borderBottom="1px solid #1e40af"
            marginTop="55px"
            marginLeft="20px"
            textAlign="left"
            paddingBottom=".5rem"
            backgroundColor="#e2e8f0"
          >
            <p>FERRAMENTAS</p>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px">
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <WrapperText>
                <p>Calculadora ROI</p>
                <p>
                  Qual o peso da sua máquina no seu bolso? Veja se vale a pena
                  trocar para a solução da Tractian.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            display="block"
            borderBottom="1px solid #1e40af"
            marginTop="15px"
            marginLeft="20px"
            textAlign="left"
            paddingBottom=".5rem"
            backgroundColor="#e2e8f0"
          >
            <p>ARTIGOS EM DESTAQUE</p>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px" marginTop="25px">
            <CardOptionsMaterialLeft>
              <p>Software para manutenção (CMMS): Guia definitivo</p>
            </CardOptionsMaterialLeft>
            <CardOptionsMaterialLeft>
              <p>Como funciona o sensor de monitoramento online da TRACTIAN?</p>
            </CardOptionsMaterialLeft>
            <CardOptionsMaterialLeft>
              <p>8 indicadores indispensáveis para gestão da manutenção</p>
            </CardOptionsMaterialLeft>
            <CardOptionsMaterialLeft>
              <p>
                Descubra como o QR Code pode otimizar a Gestão de Manutenção
              </p>
            </CardOptionsMaterialLeft>
          </Grid.Row>
        </Grid.Col>
      </Grid.Container>
    </BoxContent>
  );
}
