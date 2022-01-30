/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import {
  WrapperContainer,
  WrapperCarousel,
  WrapperImg,
  WrapperSlider,
} from "./styles";

const imgsClient = [
  {
    img: "https://imgix.tractian.com/images/logo-albras-3.png?auto=format&fit=max&w=256",
    alt: "Logo da Albras",
  },
  {
    img: "https://imgix.tractian.com/images/logo-electrolux.png?auto=format&fit=max&w=256",
    alt: "Logo da Electrolux",
  },
  {
    img: "https://imgix.tractian.com/images/logo-faber-castell-2.png?auto=format&fit=max&w=256",
    alt: "Logo da Faber Castell",
  },
  {
    img: "https://imgix.tractian.com/images/logo-embraer.png?auto=format&fit=max&w=384",
    alt: "Logo da Embraer",
  },
  {
    img: "https://imgix.tractian.com/images/logo-pirelli-2.png?auto=format&fit=max&w=384",
    alt: "Logo da Pirelli",
  },
  {
    img: "https://imgix.tractian.com/images/logo-tigre-2.png?auto=format&fit=max&w=256",
    alt: "Logo da Tigre",
  },
  {
    img: "https://imgix.tractian.com/images/logo-air-liquide-2.png?auto=format&fit=max&w=384",
    alt: "Logo da Air Liquide",
  },
  {
    img: "https://imgix.tractian.com/images/logo-arcelor-2.png?auto=format&fit=max&w=384",
    alt: "Logo da Arcelor",
  },
  {
    img: "https://imgix.tractian.com/images/logo-suzano-2.png?auto=format&fit=max&w=256",
    alt: "Logo da Suzano",
  },
  {
    img: "https://imgix.tractian.com/images/logo-iochpemaxion.png?auto=format&fit=max&w=256",
    alt: "Logo da Iochpemaxion",
  },
  {
    img: "https://imgix.tractian.com/images/logo-ciser.png?auto=format&fit=max&w=256",
    alt: "Logo da Ciser",
  },
  {
    img: "https://imgix.tractian.com/images/logo-master.png?auto=format&fit=max&w=256",
    alt: "Logo da Master",
  },
  {
    img: "https://imgix.tractian.com/images/logo-yara-2.png?auto=format&fit=max&w=384",
    alt: "Logo da Yara",
  },
];

export function Carousel() {
  const [windowWidthSlider, setWindowWidthSlider] = useState(100);

  setTimeout(() => {
    if (windowWidthSlider < -700) {
      console.log(windowWidthSlider);
      setWindowWidthSlider(windowWidthSlider - windowWidthSlider + 100);
    } else {
      setWindowWidthSlider(windowWidthSlider - 2);
    }
  }, 20);

  return (
    <WrapperContainer>
      <WrapperSlider>
        <WrapperCarousel width={windowWidthSlider}>
          {imgsClient.map((client) => (
            <WrapperImg key={client.alt}>
              <img src={client.img} alt={client.alt} />
            </WrapperImg>
          ))}
        </WrapperCarousel>
      </WrapperSlider>
    </WrapperContainer>
  );
}
