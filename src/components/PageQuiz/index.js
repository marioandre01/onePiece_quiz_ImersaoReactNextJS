/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
// import db from '../../db.json';
import Widget from '../Widget';
import QuizLogo from '../QuizLogo';
import QuizBackground from '../QuizBackground';
import QuizContainer from '../QuizContainer';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';
import Loading from '../Loading';
import Congrats from '../Congrats';

function ResultWidget({ results, nameUser }) {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        Seu resultado
        {' '}
        {nameUser}
      </Widget.Header>

      <Widget.Content>
        <p>
          Voce acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resulAtual) => {
            const isAcerto = resulAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              0
              {index + 1}
              {' '}
              - Resultado:
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
        <hr />
        { results.filter((x) => x).length === results.length
          && (
          <>
            <p>Parabéns!! Você manja do assunto!</p>
            <Congrats />
            <img
              alt="Descrição"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
              }}
              src="https://media.giphy.com/media/M7Mv92YnAccfK/giphy.gif"
            />
          </>
          )}
        {
          results.filter((x) => x).length > 0 && results.filter((x) => x).length < results.length
          && (
          <>
            <p>Você não acertou todas. Revise o assunto e tente denovo!!</p>
            <img
              alt="Descrição"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
              }}
              src="https://media.giphy.com/media/vfTWTF1OFO4ik/giphy.gif"
            />
          </>
          )
        }
        { results.filter((x) => x).length === 0
          && (
          <>
            <p>Você foi mal, estude mais e depois tente denovo!</p>
            <img
              alt="Descrição"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
              }}
              src="https://media.giphy.com/media/Ai8iZqHx2i0fK/giphy.gif"
            />
          </>
          )}
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        O quiz está preste a começar
      </Widget.Header>

      <Widget.Content>
        {/* [Desafio do Loading] */}
        <Loading />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  // onChange={() => setSelectedAlternative(alternativeIndex)}
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {/* <p>selectedAlternative: {selectedAlternative}</p> */}
          {/* {isQuestionSubmited && isCorrect && <p>Você acertou!</p>} */}
          {/* {isQuestionSubmited && !isCorrect && <p>Você errou!</p>} */}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function PageQuiz({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  // const [screenState, setScreenState] = React.useState(screenStates.RESULT);
  const [results, setResults] = React.useState([]);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];

  const bg = question.bg === undefined ? externalBg : question.bg;

  const router = useRouter();

  const {
    query: { name },
  } = router;

  function addResult(result) {
    setResults([...results, result]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
      // setScreenState(screenStates.RESULT);
    }, 1 * 1000);
    // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      {/* {screenState === screenStates.LOADING && <BoasVindas nameUser={name}/>} */}
      <QuizContainer>
        <QuizLogo />
        {/* <NomeUser /> */}
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
          addResult={addResult}
          name={name}
        />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} nameUser={name} />}

      </QuizContainer>
    </QuizBackground>

  );
}
