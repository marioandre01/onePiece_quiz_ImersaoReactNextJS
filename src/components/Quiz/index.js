import styled from 'styled-components';
import Link from 'next/link';

// src/components/Footer/index.js
const QuizWrapper = styled.div`
  a {
    display: block;
    background: ${({ theme }) => theme.colors.gitHubConerColor};
    border-radius: 5px;
    color: #fff;
    width: 6rem;
    text-align: center;
    text-decoration: none;
    padding: 5px 0;
  }
`;

export default function Quiz() {
  return (
    <QuizWrapper>
      {/* // <h1>Em breve...</h1> */}
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </QuizWrapper>
  );
}
