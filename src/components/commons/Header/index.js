import React, { useContext } from 'react';
import { HeaderWrapper } from './styles';
import { StarsGoogle } from '../../svgs/StarsGoogle';
import { Button } from '../Button';
import { PageContext } from '../../Hooks';

export default function Header() {
  const { setIsModalOpen } = useContext(PageContext);
  return (
    <HeaderWrapper>
      <HeaderWrapper.Container>
        <HeaderWrapper.Content>
          <h1>Monitoramento Online e Gestão de Ativos em um só lugar</h1>
          <HeaderWrapper.Stars>
            <StarsGoogle />
          </HeaderWrapper.Stars>
          <h4>
            Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.
          </h4>
          <HeaderWrapper.Button>
            <Button
              ghost
              paddingRight="22px"
              paddingLeft="22px"
              fontWeight="500"
              onClick={() => setIsModalOpen(true)}
            >
              Demonstração
            </Button>
          </HeaderWrapper.Button>
          <p>
            Já é cliente?
            {' '}
            <a href="https://app.tractian.com" target="_blank" rel="noreferrer">
              Acesse aqui.
            </a>
          </p>
        </HeaderWrapper.Content>
      </HeaderWrapper.Container>
      <HeaderWrapper.Svg>      
        <img src="https://imgix.tractian.com/images/ondas.svg" alt="Svg ondas" />
      </HeaderWrapper.Svg>
      {/* <Machinery /> */}
    </HeaderWrapper>
  );
}