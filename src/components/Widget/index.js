  
import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 5px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
  img {
    height: 22px;
    margin-right: 10px;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  input {
    width: 100%;
    border-radius: 5px;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    height: 2rem;
    padding-left: 10px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.contrastText}
    
  }
  a {
    display: block;
    background: ${({ theme }) => theme.colors.gitHubConerColor};
    border-radius: 5px;
    color: #fff;
    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 5px 0;
  }
`;

export default Widget;