/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import PageQuiz from '../../src/components/PageQuiz';

export default function QuizPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <PageQuiz
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>

  );
}
