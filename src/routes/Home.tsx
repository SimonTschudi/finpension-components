import { HomePage } from '@pages/HomePage';
import type { Route } from '@routes/Home';

export function meta({ params }: Route.MetaArgs) {
    return [
        { params },
        { title: 'Example title' },
        { name: 'description', content: 'Example desciption' },
    ];
}

export default function Home() {
    return <HomePage />;
}
