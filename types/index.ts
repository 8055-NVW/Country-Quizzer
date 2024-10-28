// We deiner our used interfaces here and export them where required in the project

export interface QuizData {
    // this is the response interface from the API
    country: string
    answers: string[]
    correctAnswer: string
}

export interface GameOverProps {
    // this is the props interface for the GameOver component
    currentStrek: number
    longestStreak: number
    handleStartNewGame: () => void
}