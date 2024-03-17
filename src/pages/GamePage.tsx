import Button from '@/components/Button';
import Header from '@/components/Header';
import IconMagicWand from '@/components/IconMagicWand';
import PlayingField from '@/components/PlayingField';
import { AppRoutes } from '@/router/routes';
import {
  gameState,
  setRundomNumbersFirstPlayingField,
  setRundomNumbersSecondPlayingField,
} from '@/store/slice/gameSlice';
import { generateRandomNumbers } from '@/utils/generateRandomNumbers';
import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GamePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrayGame1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const arrayGame2 = [1, 2];
  const { firstPlayingField, secondPlayingField } = useSelector(gameState);
  const winningNumbersGame1 = useRef<number[]>([]);
  const winningNumbersGame2 = useRef<number[]>([]);

  useEffect(() => {
    winningNumbersGame1.current = generateRandomNumbers(8, 19);
    winningNumbersGame2.current = generateRandomNumbers(1, 2);

    console.log(winningNumbersGame1.current, winningNumbersGame2.current);
  }, []);

  const showResult = () => {
    const matchGame1 = firstPlayingField.filter((number) =>
      winningNumbersGame1.current.includes(number),
    ).length;
    const matchGame2 = secondPlayingField === winningNumbersGame2.current;

    console.log(firstPlayingField, secondPlayingField);

    if (matchGame1 >= 4 || (matchGame1 >= 3 && matchGame2)) {
      navigate(AppRoutes.result);
    } else {
      alert('К сожалению, вы не выиграли. Попробуйте ещё раз!');
      dispatch(setRundomNumbersFirstPlayingField([]));
      dispatch(setRundomNumbersSecondPlayingField([]));
    }
  };

  const iconHandler = () => {
    const numbersGame1 = generateRandomNumbers(8, 19);
    const numbersGame2 = generateRandomNumbers(1, 2);

    dispatch(setRundomNumbersFirstPlayingField(numbersGame1));
    dispatch(setRundomNumbersSecondPlayingField(numbersGame2));
  };

  return (
    <>
      <div className="max-w-xl min-h-[368px] max-h-[449px] mx-auto flex flex-col bg-white rounded-2xl p-4">
        <Header title="Билет 1" icon={<IconMagicWand />} onClickIcon={iconHandler} />
        <main className="w-full flex-1 flex flex-col gap-2 justify-between mt-3.5 text-sm">
          <PlayingField
            setNumbersGame={arrayGame1}
            playingFieldNumber={1}
            rulesGame={'Отметьте 8 чисел.'}
          />
          <PlayingField
            setNumbersGame={arrayGame2}
            playingFieldNumber={2}
            rulesGame={'Отметьте 1 число.'}
          />

          <Button onClick={showResult}>Показать результат</Button>
        </main>
      </div>
    </>
  );
};

export default GamePage;
