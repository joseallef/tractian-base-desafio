import React from "react";
import {
  BoxContent,
  CardOptions,
  WrapperText,
  WrapperVideo,
} from "../Solutions/styles";
import { Grid } from "../../../layout/Grid";
import { Button } from "../../Button";

export default function ContentAbout({ isOpen }) {
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
        <Grid.Col marginTop="45px" paddingBottom="10rem">
          <Grid.Row
            display="block"
            textAlign="left"
            borderBottom="1px solid #1e40af"
            paddingBottom=".5rem"
            marginTop="20px"
            marginLeft="20px"
          >
            <p>VISÃO GERAL</p>
          </Grid.Row>
          <Grid.Row padding="5px" marginLeft="20px">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              <WrapperText>
                <p>Conheça a Tractian</p>
                <p>
                  Saiba mais sobre a equipe e a história por trás do produto.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row padding="5px" marginLeft="20px">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <WrapperText>
                <p>Trabalhe Conosco</p>
                <p>
                  Vagas abertas: faça parte da startup que mais cresce na
                  América Latina.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row padding="5px" marginLeft="20px">
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
        <Grid.Col marginTop="45px" paddingRight="40px">
          <Grid.Row
            display="block"
            borderBottom="1px solid #1e40af"
            marginTop="20px"
            textAlign="left"
            paddingBottom=".5rem"
            marginLeft="20px"
          >
            <p>NOSSOS CLIENTES</p>
          </Grid.Row>
          <Grid.Row padding="5px" marginLeft="20px">
            <CardOptions>
              <svg
                viewBox="0 0 60 60"
                className="flex-shrink-0 h-6 w-6 text-blue-600 -mt-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M59,55.5v-39H47v39h-3v-31H32v31h-3v-23H17v23h-3v-14H2v14H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1h12h3h12h3h12h3h12   c0.552,0,1-0.447,1-1S59.552,55.5,59,55.5z M4,55.5v-12h8v12H4z M19,55.5v-21h8v21H19z M34,55.5v-29h8v29H34z M49,55.5v-37h8v37H49   z"></path>
                <path d="M8.03,27.83c0.169,0,0.342-0.043,0.499-0.134l36.269-20.94l-2.27,4.99c-0.229,0.503-0.007,1.096,0.496,1.324   c0.134,0.062,0.275,0.09,0.414,0.09c0.38,0,0.743-0.218,0.911-0.586l3.562-7.83c0.011-0.025,0.009-0.052,0.018-0.078   c0.019-0.053,0.034-0.104,0.044-0.16c0.005-0.028,0.021-0.051,0.023-0.08c0.001-0.012-0.004-0.022-0.003-0.034   c0.002-0.038-0.002-0.073-0.004-0.111c-0.003-0.055-0.012-0.107-0.024-0.162c-0.008-0.038-0.01-0.077-0.023-0.114   c-0.012-0.036-0.033-0.066-0.049-0.101C47.88,3.881,47.88,3.854,47.866,3.83c-0.014-0.024-0.038-0.038-0.054-0.061   c-0.021-0.031-0.037-0.064-0.062-0.092c-0.026-0.03-0.059-0.051-0.089-0.078c-0.041-0.037-0.082-0.071-0.128-0.101   c-0.031-0.02-0.059-0.042-0.093-0.059c-0.011-0.005-0.017-0.015-0.028-0.02c-0.025-0.011-0.052-0.009-0.077-0.018   c-0.055-0.02-0.109-0.034-0.166-0.044c-0.026-0.005-0.047-0.02-0.074-0.022l-8.562-0.83c-0.555-0.056-1.039,0.35-1.092,0.898   c-0.054,0.55,0.349,1.039,0.898,1.092l5.456,0.529L7.529,25.964C7.05,26.24,6.887,26.852,7.163,27.33   C7.348,27.651,7.684,27.83,8.03,27.83z"></path>
              </svg>
              <WrapperText>
                <p>Cases de Sucesso</p>
                <p>
                  Descubra como a solução melhora a rotina dos mantenedores.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row padding="5px" marginLeft="20px">
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
                <p>Quem usa, recomenda</p>
                <p>
                  Veja a multinacional que aprimorou seu dia a dia de manutenção
                  usando a nossa solução.
                </p>
                <Button color="#1e40af">Assistir vídeo</Button>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row
            display="block"
            textAlign="left"
            borderBottom="1px solid #1e40af"
            paddingBottom=".5rem"
            marginTop="20px"
            marginLeft="20px"
          >
            <p>PESSOAS, EMPRESAS E RESULTADOS REAIS</p>
          </Grid.Row>
        </Grid.Col>
        <Grid.Col
          backgroundColor="#e2e8f0"
          marginLeft="-10px"
          marginRight="-20px"
          padding="20px"
          paddingRight="50px"
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
            <p>INSTITUCIONAL</p>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px">
            <CardOptions>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                viewBox="0 0 18 18"
                aria-hidden="true"
              >
                <path
                  strokeWidth="0.7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
                ></path>
                <path d="M1 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
              </svg>
              <WrapperText>
                <p>Imprensa</p>
                <p>
                  Veja o que os principais veículos de informação falam sobre a
                  Tractian.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px">
            <CardOptions>
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <WrapperText>
                <p>Comunidade</p>
                <p>
                  Confira nossas principais iniciativas para empoderar os
                  profissionais da indústria.
                </p>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
          <Grid.Row padding="5px 5px" marginLeft="0px">
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
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                ></path>
              </svg>
              <WrapperText>
                <p>Contato</p>
                <p>
                  Rua Azevedo Macedo, N°20 - 10° andar Vila Mariana, São Paulo -
                  SP, 04013-060
                </p>
                <span>get@tractian.com</span>
                <Button color="#1d4ed8" border="1px solid" marginTop="20px">
                  Enviar mensagem
                </Button>
              </WrapperText>
            </CardOptions>
          </Grid.Row>
        </Grid.Col>
      </Grid.Container>
    </BoxContent>
  );
}
