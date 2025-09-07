import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 90%;
  /* --- MODIFIED (smaller again) --- */
  max-width: 400px; /* Further decreased from 450px */
  height: 600px;    /* Further decreased from 650px */
  /* --- END MODIFICATION --- */
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  /* Added to accommodate WelcomeTextWrapper */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the entire carousel content vertically */
`;

// --- NEW STYLED COMPONENT ---
export const WelcomeTextWrapper = styled.h1`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem; /* Space between text and carousel */
  z-index: 10; /* Ensure it's above other elements if needed */
  position: absolute; /* Position it above the carousel slides */
  top: 15px; /* Adjust as needed */
  width: 60%;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
`;
// --- END NEW STYLED COMPONENT ---


export const Slide = styled.div`
  position: absolute;
  top: 0; /* Reset positioning relative to CarouselContainer */
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  
  /* Adjusted to create space for WelcomeTextWrapper */
  transform: translateY(60px); /* Move down slightly to clear the welcome text */
  height: calc(100% - 100px); /* Make slide height slightly smaller */
  width: calc(100% - 40px); /* Make slide width slightly smaller */
  left: 20px; /* Center horizontally */
  top: 30px; /* Position below welcome text */
  border-radius: 15px; /* Added some border-radius to the slides themselves */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px; /* Match slide border-radius */
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px 20px 20px;
  text-align: center;
  border-bottom-left-radius: 15px; /* Match slide border-radius */
  border-bottom-right-radius: 15px; /* Match slide border-radius */
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;