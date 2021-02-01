/* eslint-disable max-len */
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Lock from '../src/components/Lock';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
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
              {/* <MyButton /> */}
            </form>
          </Widget.Content>

        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: '-100%' },
          }}
          initial="hidden"
          animate="show"

          // initial={{ scale: 0 }}
          // animate={{ rotate: 180, scale: 1 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 260,
          //   damping: 20,
          // }}
        >
          <Widget.Content>
            <h2 className="titulo-quiz">Quizes da galera</h2>
            { name.length === 0 && <p className="texto-titulo-quiz">Digite seu nome no campo acima para desbloquear</p> }
            { name.length !== 0 && <p className="texto-titulo-quiz">Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React Next.JS da Alura fez:</p> }

            <ul>
              {
               name.length !== 0
                && db.external.map((linkExterno) => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '') // substitui todas as barras da string por nada
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })
              }
            </ul>
            { name.length === 0
            && <Lock />}
          </Widget.Content>

        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '-100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marioandre01/onePiece_quiz_ImersaoReactNextJS" />
    </QuizBackground>

  );
}
