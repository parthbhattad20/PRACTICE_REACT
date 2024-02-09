import React, { useState } from "react";
import "./App.css"; // You can import Tailwind CSS here

function App() {
    const [buttonPosition, setButtonPosition] = useState("center");
    const [showCelebration, setShowCelebration] = useState(false);

    const handleYesClick = () => {
        setShowCelebration(true);
    };

    const handleNoClick = () => {
        const newPosition = buttonPosition === "center" ? "random" : "center";
        setButtonPosition(newPosition);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#FFC0CB]">
            <div className="text-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfzyEe88QGVdSAk5OUU3WmS0UQnGUqLxrKWSYVuDu4w&s"
                    alt="heart"
                    className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
                />
                <h1 className="text-xl font-bold mt-4">
                    Will you be my Valentine?
                </h1>
                {!showCelebration && (
                    <>
                        <button
                            className={`bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 ${
                                buttonPosition === "random" ? "absolute" : ""
                            }`}
                            style={{
                                left:
                                    buttonPosition === "random"
                                        ? `${Math.random() * 80}%`
                                        : "unset",
                                top:
                                    buttonPosition === "random"
                                        ? `${Math.random() * 80}%`
                                        : "unset",
                            }}
                            onClick={handleNoClick}
                        >
                            No
                        </button>
                        <button
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
                            onClick={handleYesClick}
                        >
                            Yes
                        </button>
                    </>
                )}
                {showCelebration && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold text-green-500">
                            Congratulations!
                        </h2>
                        <p className="mt-2 text-lg">
                            You are officially my BUBU now 
                            And Happy Chocolate day shona hehe and sorry bubu
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
