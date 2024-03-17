import { FC, ReactNode } from 'react';

interface HeaderProps {
  title: string;
  icon?: ReactNode;
  onClickIcon?: () => void;
}

const Header: FC<HeaderProps> = ({ title, icon, onClickIcon }) => {
  return (
    <header className="flex justify-between justify-items-center">
      <div className="text-base font-semibold">{title}</div>
      <div className="cursor-pointer" onClick={onClickIcon}>
        {icon}
      </div>
    </header>
  );
};

export default Header;
