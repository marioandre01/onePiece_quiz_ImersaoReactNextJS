/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './animation.json';

const LoadingWrapper = styled.div`
  --size: 55px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 50px;
`;

export default function Loading() {
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
      <LoadingWrapper>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            height={100}
            width={100}
          />
        </div>
      </LoadingWrapper>
    </>
  );
}
