import { GameOverProps } from "../types";

export default function GameOver({ currentStreak, longestStreak, handleStartNewGame}: GameOverProps) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-6">Game Over!</h2>
                <p className="mb-4">Your final streak: {currentStreak}</p>
                <p className="mb-8">Best streak: {longestStreak}</p>
                <button 
                onClick={handleStartNewGame}
                className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition mb-4">
                    Start New Game
                </button>
            </div>
        </div>
    )
}