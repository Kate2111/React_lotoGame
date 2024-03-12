import Header from '@/components/Header';
import { FC } from 'react';

const ResultPage: FC = () => {
  return (
    <>
      <div className="max-w-xl mx-auto h-96 px-7 flex flex-col items-center justify-center gap-5 bg-white rounded-2xl text-grey-700">
        <Header title="Билет 1" />
        <div>Результат</div>
      </div>
    </>
  );
};

export default ResultPage;
