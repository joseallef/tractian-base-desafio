import styled from "styled-components";

const WrapperContainer = styled.div`
  width: 100%;
  height: 150px;
  flex-direction: column;
  display: flex;
  position: absolute;
`;

const WrapperSlider = styled.div`
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;

  overflow-x: hidden;

  &:before {
    background: linear-gradient(90deg, #fff 5%, hsla(0, 0%, 100%, 0));
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  &:after {
    right: 0;
    top: 0;
    transform: rotate(180deg);
    background: linear-gradient(90deg, #fff 5%, hsla(0, 0%, 100%, 0));
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
`;

const WrapperCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin-left: auto;
  margin-right: auto;

  background: transparent;
  height: 150px;
  margin: auto;
  position: relative;
  transform: translateX(${({ width }) => width}px);
`;

const WrapperImg = styled.div`
  padding: 6px;
  margin: 30px;
  filter: grayscale(1) brightness(0.6) opacity(0.7);

  box-sizing: border-box;
  display: block;
  max-width: 100%;

  img {
    width: 130px;
    height: 80px;
  }
`;

export { WrapperContainer, WrapperCarousel, WrapperImg, WrapperSlider };
