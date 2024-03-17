import { FC, useEffect, useState } from 'react';
interface GameCellProps {
  number: number;
  onSelectNumber: (number: number) => void;
  isSelected: boolean;
}

const GameCell: FC<GameCellProps> = ({ number, onSelectNumber, isSelected }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onSelectNumber(number);
  };

  useEffect(() => {
    setClicked(isSelected);
  }, [isSelected]);

  return (
    <div
      className={`w-10 h-10 border-gray-200 ${
        clicked ? 'border-[0px]' : 'border-[1px]'
      } rounded-[3px] p-1 text-black flex items-center justify-center cursor-pointer`}
      onClick={handleClick}>
      <div
        className={`${
          clicked ? 'bg-amber-300' : ''
        } w-9 h-8 rounded-[3px] p-1 text-black flex items-center justify-center`}>
        {number}
      </div>
    </div>
  );
};

export default GameCell;
