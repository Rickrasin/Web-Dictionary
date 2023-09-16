import { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [audio, setAudio] = useState(null);
  const [audioRunning, setAudioRunning] = useState(false);

  const playAudio = (audioUrl) => {
    const newAudio = new Audio(audioUrl);
    newAudio.currentTime = 0.1;
    newAudio.play();
    setAudioRunning(true);
    setAudio(newAudio);
    newAudio.addEventListener("ended", () => {
      setAudioRunning(false);
    });
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
    setAudioRunning(false);
    setAudio(null);
  };

  return (
    <AudioContext.Provider value={{ playAudio, stopAudio, audioRunning }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio deve ser usado dentro de um AudioProvider");
  }
  return context;
}
