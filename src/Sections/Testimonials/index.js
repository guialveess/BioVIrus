import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Section>
        <Title style={{ textAlign: 'center', margin: '0 auto', display: 'block' }}>Características importantes das seguintes viroses:</Title>
        <Carousal>
          <Slider {...settings}>
            <Card
              text="Os sintomas da dengue incluem febre alta, dor de cabeça intensa, dor atrás dos olhos, dores musculares e nas articulações, náuseas, vômitos, fadiga e erupções cutâneas."
              name="Dengue"
              image="avatar-1"
            />
  
            <Card
              text="Os sintomas da dengue incluem febre alta, dor de cabeça intensa, dor atrás dos olhos, dores musculares e nas articulações, náuseas, vômitos, fadiga e erupções cutâneas. Os sintomas geralmente duram de 2 a 7 dias."
              name="Sintomas da Dengue"
              image="avatar-2"
            />
  
            <Card
              text="A dengue hemorrágica é uma forma grave da doença que pode ser fatal. Ela ocorre principalmente quando alguém que já teve um sorotipo do vírus é infectado por outro sorotipo. Os sintomas incluem sangramentos, queda na pressão arterial e disfunção de órgãos."
              name="Dengue Hemorrágica"
              image="avatar-3"
            />
  
            <Card
              text="A prevenção da dengue envolve eliminar criadouros do mosquito Aedes aegypti, como água parada em vasos de plantas, pneus e recipientes. O uso de repelentes, telas protetoras e roupas que cubram a pele também ajudam a evitar picadas de mosquito."
              name="Prevenção da Dengue"
              image="avatar-4"
            />
          </Slider>
        </Carousal>
      </Section>
  
      <Section>
        <Title style={{ textAlign: 'center', margin: '0 auto', display: 'block' }}>Características importantes das seguintes viroses:</Title>
        <Carousal>
          <Slider {...settings}>
            <Card
              text="Os sintomas da dengue incluem febre alta, dor de cabeça intensa, dor atrás dos olhos, dores musculares e nas articulações, náuseas, vômitos, fadiga e erupções cutâneas."
              name="Dengue"
              image="avatar-1"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Chikungunya"
              image="avatar-2"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Jenny (CodeCall)"
              image="avatar-3"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Jenny (CodeCall)"
              image="avatar-4"
            />
          </Slider>
        </Carousal>
      </Section>

      <Section>
        <Title style={{ textAlign: 'center', margin: '0 auto', display: 'block' }}>Características importantes das seguintes viroses:</Title>
        <Carousal>
          <Slider {...settings}>
            <Card
              text="Os sintomas da dengue incluem febre alta, dor de cabeça intensa, dor atrás dos olhos, dores musculares e nas articulações, náuseas, vômitos, fadiga e erupções cutâneas."
              name="Dengue"
              image="avatar-1"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Chikungunya"
              image="avatar-2"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Jenny (CodeCall)"
              image="avatar-3"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Jenny (CodeCall)"
              image="avatar-4"
            />
          </Slider>
        </Carousal>
      </Section>

      <Section>
        <Title style={{ textAlign: 'center', margin: '0 auto', display: 'block' }}>Características importantes das seguintes viroses:</Title>
        <Carousal>
          <Slider {...settings}>
            <Card
              text="Os sintomas da dengue incluem febre alta, dor de cabeça intensa, dor atrás dos olhos, dores musculares e nas articulações, náuseas, vômitos, fadiga e erupções cutâneas."
              name="Dengue"
              image="avatar-1"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Chikungunya"
              image="avatar-2"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Jenny (CodeCall)"
              image="avatar-3"
            />
  
            <Card
              text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
              name="Jenny (CodeCall)"
              image="avatar-4"
            />
          </Slider>
        </Carousal>
      </Section>
    </>
  );
  
};

export default Testimonials;
