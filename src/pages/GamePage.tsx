import Button from '@/components/Button';
import GameCell from '@/components/GameCell';
import Header from '@/components/Header';
import IconMagicWand from '@/components/IconMagicWand';
import { AppRoutes } from '@/router/routes';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const GamePage: FC = () => {
  const navigate = useNavigate();
  const arrayGame1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayGame2 = [1, 2];

  const showResult = () => {
    navigate(AppRoutes.result);
  };

  return (
    <>
      <div className="max-w-xl min-h-[368px] max-h-[449px] mx-auto flex flex-col bg-white rounded-2xl p-4">
        <Header title="Билет 1" icon={<IconMagicWand />} />
        <main className="w-full flex-1 flex flex-col gap-2 justify-between mt-3.5 text-sm">
          <div>
            <div className="flex  justify-start justify-items-center gap-1">
              <h2 className="font-medium">Поле 1</h2>
              <div>Отметьте 8 чисел.</div>
            </div>
            <div className="flex flex-wrap mt-2 items-center">
              {arrayGame1.map((item) => {
                return <GameCell key={item}>{item}</GameCell>;
              })}
            </div>
          </div>

          <div>
            <div className="flex  justify-start justify-items-center gap-1">
              <h2 className="font-medium">Поле 2</h2>
              <div>Отметьте 1 число.</div>
            </div>
            <div className="flex flex-wrap mt-2">
              {arrayGame2.map((item) => {
                return <GameCell key={item}>{item}</GameCell>;
              })}
            </div>
          </div>

          <Button onClick={showResult}>Показать результат</Button>
        </main>
      </div>
    </>
  );
};

export default GamePage;
