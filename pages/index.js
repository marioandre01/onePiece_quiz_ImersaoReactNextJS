import React from 'react';
// import styled from 'styled-components';
// import Link from 'next/link';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <img src="https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/128/Luffys-flag-icon.png" alt="Icone logo One Piece" />
            <h1>One Piece </h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste os seus conhecimentos sobre One Piece e divirta-se nesse incrível quiz organizado pela AluraQuiz!</p>
            <form onSubmit={function (infoDoEvento) {
              // preventDefault() - Não ficar recarregando a página quando o formulário for enviado
              infoDoEvento.preventDefault();
              
              router.push(`/quiz?name=${name}`);
              // console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infoDoEvento) => setName(infoDoEvento.target.value)}
                placeholder="Digite seu nome para jogar :)"
                value={name}
              />
              {/* <p>{name}</p> */}
              <Button type="submit" disabled={name.length === 0}>
                JOGAR
              </Button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Content>
            <h2>Quizes da galera</h2>
            <p>Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React Next.JS da Alura fez:</p>
            <Input className="input-quiz-users" value="luffy/quizCarne"/>
            <Input className="input-quiz-users" value="zoro/quizEspadachim"/>
            <Input className="input-quiz-users" value="sanji/quizNami"/>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marioandre01/onePiece_quiz_ImersaoReactNextJS" />
    </QuizBackground>

  );
}
