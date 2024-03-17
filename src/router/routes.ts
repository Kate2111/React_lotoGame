import GamePage from '@/pages/GamePage';
import ResultPage from '@/pages/ResultPage';

export const AppRoutes = {
  game: '/React_lotogame',
  result: '/React_lotogame/result',
};
interface RouteObject {
  path: string;
  element: React.ComponentType;
}

export const routes: RouteObject[] = [
  {
    path: AppRoutes.game,
    element: GamePage,
  },
  {
    path: AppRoutes.result,
    element: ResultPage,
  },
];
