import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './animation.json';

const LockWrapper = styled.div`
  --size: 55px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  margin: auto;
`;

export default function Lock() {
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
      <LockWrapper>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            height={100}
            width={100}
          />
        </div>
      </LockWrapper>
    </>
  );
}
