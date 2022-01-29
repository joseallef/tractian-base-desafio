import React from "react";
import { BoxContent, CardOptions, WrapperText, WrapperVideo } from "./styles";
import { Grid } from "../../../layout/Grid";
import { Button } from "../../Button";

export default function ContentSolutions({ isOpen }) {
  return (
    <BoxContent isOpen={isOpen}>
      <Grid.Container
        display="block"
        flexDirection="column"
        flex="1"
        marginLeft="0px"
        marginRight="0px"
        paddingRight="0px"
        paddingLeft="0px"
        padding="20px"
      >
        <Grid.Col display="block" marginTop="50px" marginLeft="16px">
          <Grid.Row
            display="block"
            textAlign="left"
            borderBottom="1px solid #1e40af"
            paddingBottom=".5rem"
          >
            <p>Smart Trac</p>
            <p>Monitoramento Online</p>
          </Grid.Row>
          <Grid.Row
            padding="5px"
            marginLeft={{
              xs: "0px",
              lg: "20px",
            }}
          >
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
              <WrapperText>
                <p>Sensor Tractian</p>
                <p>Análise de vibração e temperatura em tempo real.</p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            padding="5px"
            marginLeft={{
              xs: "0px",
              lg: "20px",
            }}
          >
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                ></path>
              </svg>
              <WrapperText>
                <p>Plataforma de Monitoramento</p>
                <p>Monitore a condição das suas máquinas de qualquer lugar.</p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            padding="5px"
            marginLeft={{
              xs: "0px",
              lg: "20px",
            }}
          >
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <WrapperText>
                <p>Entenda a solução</p>
                <p>
                  Descubra como a TRACTIAN facilita a rotina do profissional de
                  manutenção.
                </p>
                <Button color="#1e40af">Ver vídeo</Button>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
        </Grid.Col>
        <Grid.Col display="block" marginTop="50px" marginLeft="16px">
          <Grid.Row
            display="block"
            borderBottom="1px solid #1e40af"
            textAlign="left"
            paddingBottom=".5rem"
          >
            <p>TracOS™</p>
            <p>Gestão de ativos</p>
          </Grid.Row>
          <Grid.Row
            padding="5px"
            marginTop={{
              xs: "0px",
              lg: "20px",
            }}
            marginLeft={{
              xs: "0px",
              lg: "20px",
            }}
          >
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600 object-contain"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <WrapperText>
                <p>Software Gestão da Manutenção</p>
                <p>
                  Gestão da Manutenção com a plataforma mais completa do
                  mercado.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            padding="5px"
            marginTop={{
              xs: "0px",
              lg: "20px",
            }}
            marginLeft={{
              xs: "0px",
              lg: "20px",
            }}
          >
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600 object-contain"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              <WrapperText>
                <p>Funcionalidades do CMMS</p>
                <p>
                  Centralize as atividades do seu time e potencialize seus
                  resultados.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            padding="5px"
            marginTop={{
              xs: "0px",
              lg: "20px",
            }}
            marginLeft={{
              xs: "0px",
              lg: "20px",
            }}
          >
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <WrapperText>
                <p>Ordens de Serviço com o TracOS™</p>
                <p>
                  Saiba como o nosso CMMS otimiza os serviços de manutenção.
                </p>
                <Button color="#1e40af">Ver vídeo</Button>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            padding="px"
            marginTop={{
              xs: "0px",
              lg: "20px",
            }}
            marginLeft={{
              xs: "0px",
              lg: "20px",
            }}
          >
            <CardOptions>
              <img
                src="https://imgix.tractian.com/images/capterra-badge.png?auto=format&fit=max&w=128 1x, https://imgix.tractian.com/images/capterra-badge.png?auto=format&fit=max&w=256 2x"
                alt="Logo Capterra"
              />
              <WrapperText>
                <p></p>
                <p>TOP Solução CMMS, OEE e EAM no ranking Capterra 2021</p>
                <a href="#">Ler mais</a>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
        </Grid.Col>
        <Grid.Col
          display="block"
          backgroundColor="#e2e8f0"
          marginRight="-20px"
          padding="20px"
          paddingRight="50px"
          marginTop={{
            xs: "0px",
            lg: "50px",
          }}
          marginLeft={{
            xs: "0px",
            lg: "-10px",
          }}
        >
          <Grid.Row
            display="block"
            borderBottom="1px solid #1e40af"
            marginTop="65px"
            marginLeft="20px"
            textAlign="left"
            paddingBottom=".5rem"
            backgroundColor="#e2e8f0"
          >
            <p>VISÃO GERAL</p>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px">
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <WrapperText>
                <p>Planos</p>
                <p>Saiba como obter nossa solução.</p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px">
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                ></path>
              </svg>
              <WrapperText>
                <p>Fale com um especialista</p>
                <p>
                  Conheça o sistema de perto e descubra todas as suas vantagens.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            display="block"
            borderBottom="1px solid #1e40af"
            marginTop="65px"
            marginLeft="20px"
            textAlign="left"
            paddingBottom=".5rem"
            backgroundColor="#e2e8f0"
          >
            <p>DESTAQUE</p>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px">
            <CardOptions>
              <WrapperVideo>
                <img
                  src="https://imgix.tractian.com/images/thumb-amsted-play.png?auto=format&fit=max&w=256"
                  alt="Thumb amsted case"
                />
                <WrapperText>
                  <p></p>
                  <p>
                    Veja como a TRACTIAN revolucionou o dia a dia da manutenção
                    na maior fabricante de fundidos ferroviários e industriais
                    da America do Sul!
                  </p>
                </WrapperText>
              </WrapperVideo>
            </CardOptions>
          </Grid.Row>
        </Grid.Col>
      </Grid.Container>
    </BoxContent>
  );
}
