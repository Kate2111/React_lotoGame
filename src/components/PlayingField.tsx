import { FC } from 'react';
import GameCell from './GameCell';
import { useDispatch, useSelector } from 'react-redux';
import { gameState, setFirstPlayingField, setSecondPlayingField } from '@/store/slice/gameSlice';

interface PlayingFieldProps {
  setNumbersGame: number[];
  rulesGame: string;
  playingFieldNumber: number;
}

const PlayingField: FC<PlayingFieldProps> = ({ setNumbersGame, rulesGame, playingFieldNumber }) => {
  const dispatch = useDispatch();

  const { firstPlayingField, secondPlayingField } = useSelector(gameState);

  const handleSelectNumber = (number: number) => {
    if (playingFieldNumber === 1) {
      if (firstPlayingField.length < 8 || firstPlayingField.includes(number)) {
        dispatch(setFirstPlayingField(number));
      } else {
        alert(rulesGame);
      }
    } else {
      if (secondPlayingField.length < 1 || secondPlayingField.includes(number)) {
        dispatch(setSecondPlayingField(number));
      } else {
        alert(rulesGame);
      }
    }
  };

  const isSelected = (number: number) => {
    if (playingFieldNumber === 1) {
      return firstPlayingField.includes(number);
    } else {
      return secondPlayingField.includes(number);
    }
  };

  return (
    <>
      <div className="flex  justify-start justify-items-center gap-1">
        <h2 className="font-medium">Поле {playingFieldNumber}</h2>
        <div>{rulesGame}</div>
      </div>
      <div className="flex flex-wrap mt-2 items-center">
        {setNumbersGame.map((item) => {
          return (
            <GameCell
              key={item}
              number={item}
              onSelectNumber={handleSelectNumber}
              isSelected={isSelected(item)}
            />
          );
        })}
      </div>
    </>
  );
};

export default PlayingField;
