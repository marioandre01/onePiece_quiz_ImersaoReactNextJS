import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.div`
  background-color: #00000070;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
`;

export default function BoasVindas(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}