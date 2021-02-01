/* eslint-disable linebreak-style */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import PageQuiz from '../../src/components/PageQuiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <PageQuiz
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  // <pre style={{color: "black"}}>
  //     {JSON.stringify(dbExterno.questions, null, 4)}
  // </pre>

  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      .catch((err) => {
        console.error(err);
      });
    console.log('dbExterno', dbExterno);
    console.log('Infos que o Next da para nós', context.query.id);

    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    // context.res.Error
    // redirect ...
    throw new Error(err);
  }
}

QuizDaGaleraPage.propTypes = {
  dbExterno: PropTypes.string.isRequired,
};
