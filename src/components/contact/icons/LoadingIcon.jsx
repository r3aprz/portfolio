import React from 'react'

const LoadingIcon = () => {
  return (
    <>
        <svg width="24" height="24" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="var(--progress-bar-color)"
              strokeWidth="5"
              strokeDasharray="31.4 31.4"
              strokeLinecap="round"
              style={{ opacity: 1 }}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
    </>
  )
}

export default LoadingIcon