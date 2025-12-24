import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Frontend Mentor | Todo app' },
    {
      name: 'description',
      content:
        'A simple todo app to practice HTML, CSS and JavaScript by building a project from scratch.',
    },
    {
      name: 'color-scheme',
      content: 'light dark',
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
