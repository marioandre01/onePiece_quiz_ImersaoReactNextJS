/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './animation.json';

const ButtonWrapper = styled.footer`
  --size: 60px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  background-color: #fff;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0ch;
  border-radius: 100%; 
  color: black;

  .animation {
      pointer-events: none;
  }
`;

export default function MyButton() {
  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <ButtonWrapper onClick={() => {
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimationState({
          ...animationState,
          // isStopped: !animationState.isStopped
          isStopped: false,
          direction: animationState.direction === normalAnimation
            ? reverseAnimation
            : normalAnimation,
        });
        setLikeState(!isLiked);
      }}
      >
        <div className="animation">
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>

      </ButtonWrapper>
      <span>
        {isLiked ? 1 : 0}
      </span>
    </>
  );
}
