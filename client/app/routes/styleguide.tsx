import type { Route } from './+types/home';
import { Colors, Typography, Spacing } from '~/components/styleguide';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Styleguide' }];
}

export default function Styleguide() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="mt-24 font-jakarta text-7xl font-bold text-[#133041] leading-24">
        Styleguide
      </h1>

      <Colors />
      <Typography />
      <Spacing />
    </main>
  );
}
