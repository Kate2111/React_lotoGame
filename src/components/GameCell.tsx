import { FC, useState } from 'react';

interface GameCellProps {
  children: number;
}

const GameCell: FC<GameCellProps> = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`w-10 h-10 border-gray-200 ${
        clicked ? 'border-[0px]' : 'border-[1px]'
      }  rounded-[3px] p-1 text-black flex items-center justify-center`}
      onClick={handleClick}>
      <div
        className={`${
          clicked ? 'bg-amber-300' : ''
        } w-9 h-8 rounded-[3px] p-1 text-black flex items-center justify-center`}>
        {children}
      </div>
    </div>
  );
};

export default GameCell;
