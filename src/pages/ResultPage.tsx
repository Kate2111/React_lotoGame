import Button from '@/components/Button';
import Header from '@/components/Header';
import {
  setRundomNumbersFirstPlayingField,
  setRundomNumbersSecondPlayingField,
} from '@/store/slice/gameSlice';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ResultPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startNewGame = () => {
    navigate(-1);
    dispatch(setRundomNumbersFirstPlayingField([]));
    dispatch(setRundomNumbersSecondPlayingField([]));
  };

  return (
    <>
      <div className="max-w-xl mx-auto h-96 px-7 flex flex-col items-center justify-center gap-5 bg-white rounded-2xl text-grey-700">
        <Header title="Билет 1" />
        <div>Ура! Вы выйграли</div>
        <Button onClick={startNewGame}>Играть еще раз</Button>
      </div>
    </>
  );
};

export default ResultPage;
