"use client";
import { useState } from "react";

interface VoteButtonsProps {
  buttonAlignment: "vertical" | "horizontal";
}

export default function VoteButtons({ buttonAlignment }: VoteButtonsProps) {
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [showMinusOne, setShowMinusOne] = useState(false);

  // Decide row vs column layout
  const containerClasses =
    buttonAlignment === "vertical"
      ? "flex flex-col items-center justify-center"
      : "flex flex-row items-center justify-center";

  // Spacing around the count
  const countClasses =
    buttonAlignment === "vertical"
      ? "my-1 text-sm font-bold text-gray-700"
      : "mx-1 text-sm font-bold text-gray-700";

  const handleUpvote = () => {
    setShowPlusOne(true);
    setTimeout(() => setShowPlusOne(false), 500);
  };

  const handleDownvote = () => {
    setShowMinusOne(true);
    setTimeout(() => setShowMinusOne(false), 500);
  };

  return (
    <div className={containerClasses}>
      {/* Upvote container */}
      <div className="relative">
        <button
          className="text-gray-500 hover:text-blue-600"
          onClick={handleUpvote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        {/* Floating +1 (appears above the upvote button) */}
        {showPlusOne && (
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-green-600 floatUp font-bold text-sm">
            +1
          </span>
        )}
      </div>

      {/* Vote count */}
      <span className={countClasses}>123</span>

      {/* Downvote container */}
      <div className="relative">
        <button
          className="text-gray-500 hover:text-blue-600"
          onClick={handleDownvote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Floating -1 (appears above the downvote button) */}
        {showMinusOne && (
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-red-600 floatUp font-bold text-sm">
            -1
          </span>
        )}
      </div>

      {/* Keyframes & floatUp animation */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .floatUp {
          animation: floatUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
