import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
// import Quiz from '../src/components/Quiz';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();

  const {
    query: { name },
  } = router;

  return (

    <QuizBackground backgroundImage={db.bg}>
      <div className="link-back">
        <p class="name-player">Olá {name}! Bem vindo ao quiz One Pice</p>
        <Link href="/">
            <a >Voltar</a>
        </Link>
      </div>
      
      {/* <Quiz /> */}

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Qual personagem...</p>
            <form onSubmit="">
              <input value="Resposta 1" />
              <input value="Resposta 2" />
              <input value="Resposta 3" />
              <input value="Resposta 4" />
              {/* <p>{name}</p> */}
              <button type="submit">
                CONFIRMAR
              </button>
            </form>
          </Widget.Content>

        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marioandre01/onePiece_quiz_ImersaoReactNextJS" />
    </QuizBackground>

  );
}