import { myPlayer, usePlayersList } from "playroomkit";
import { CAT_MODELS } from "./Cat";
import { useState } from "react";

import { atom , useAtom  } from "jotai";
import '../output.css'

export const NameEditingAtom = atom(false);

export const UI = () => {
  const me = myPlayer();
  
  // const [gameState, setGameState] = useMultiplayerState("gameState", "lobby");
  // const [loadingSlide, setLoadingSlide] = useState(true);

  const [nameEditing, setNameEditing] = useAtom(NameEditingAtom);
  const [nameInput, setNameInput] = useState(
    me?.getState("name") || me?.getState("profile").name
  );

    usePlayersList(true);
    return <>
      <div
        className={
          "fixed z-10 bottom-4 left-1/2 flex flex-wrap justify-center items-center gap-2.5 -translate-x-1/2 w-full max-w-[75vw]"
        }
      >
        {CAT_MODELS.map((model, idx) => (
          <div
            key={model}
            className={`min-w-14 min-h-14 w-14 h-14 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full shadow-md cursor-pointer
            ${
              me?.getState("cat") === model ||
              (!me?.getState("cat") && idx === 0)
                ? "ring-4 ring-blue-500"
                : ""
            }
            `}
            onClick={() => me?.setState("cat", model)}
          >
            <img
              src={`/images/cats/${model}_cat.png`}
              alt={model}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {nameEditing && (
        <div className="fixed z-20 inset-0 flex items-center justify-center flex-col gap-2 bg-black bg-opacity-20 backdrop-blur-sm">
          <input
            autoFocus
            className="p-3"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                me?.setState("name", nameInput);
                setNameEditing(false);
              }
            }}
          />
          <div className="flex items-center gap-2">
            <button
              className="px-8 py-2 bg-red-400 text-white text-2xl rounded-md"
              onClick={() => {
                setNameEditing(false);
              }}
            >
              ✗
            </button>
            <button
              className="px-8 py-2 bg-green-400 text-white text-2xl rounded-md"
              onClick={() => {
                me?.setState("name", nameInput);
                setNameEditing(false);
              }}
            >
              ✓
            </button>
          </div>
        </div>
      )}

    </>;
};