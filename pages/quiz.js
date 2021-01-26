import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import Quiz from '../src/components/Quiz'
import GitHubCorner from '../src/components/GitHubCorner'

export default function Home() {
    return (
      <QuizBackground backgroundImage={db.bg}>
        <Quiz />
        <GitHubCorner />
      </QuizBackground>
      
    )  
}