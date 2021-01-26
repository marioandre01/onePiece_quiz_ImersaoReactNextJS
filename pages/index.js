import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import Link from 'next/link'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  /* -- Responsividade --*/
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
            <img src="https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/128/Luffys-flag-icon.png"/>
            <h1>One Piece </h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste os seus conhecimentos sobre One Piece e divirta-se nesse incrível quiz organizado pela AluraQuiz!</p>
            <input placeholder="Digite seu nome para jogar :)" />
            <br />
            <Link href="/quiz">
                <a>Jogar</a>      
            </Link>
          </Widget.Content>
          
        </Widget>
         
        <Widget>     
          <Widget.Content> 
            <h2>Quizes da galera</h2>
            <p>Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React Next.JS da Alura fez: Em breve...</p>
          </Widget.Content> 
          
        </Widget>
        <Footer />
      </QuizContainer>  
      <GitHubCorner projectUrl="https://github.com/marioandre01/onePiece_quiz_ImersaoReactNextJS" />  
    </QuizBackground>
    
  )  
}
