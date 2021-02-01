/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './animation.json';

const CongratsWrapper = styled.div`
  --size: 60px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 50px;
`;

export default function Congrats() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <CongratsWrapper>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            height={100}
            width={300}
          />
        </div>
      </CongratsWrapper>
    </>
  );
}
