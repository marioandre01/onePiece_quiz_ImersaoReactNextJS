import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>One Piece </h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste os seus conhecimentos sobre One Piece e divirta-se criando o seu AluraQuiz!</p>
          </Widget.Content>
          
        </Widget>
         
        <Widget>     
          <Widget.Content> 
            <h2>Quizes da galera</h2>
            <p>Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React Next.JS da Alura fez:</p>
          </Widget.Content> 
          
        </Widget>
        <Footer />
      </QuizContainer>  
      <GitHubCorner projectUrl="https://github.com/marioandre01" />  
    </QuizBackground>
    
  )  
}
