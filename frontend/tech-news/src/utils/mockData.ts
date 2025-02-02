import { NewsItem } from '../types/news';

export const mockNews: NewsItem[] = Array.from({ length: 30 }, (_, index) => ({
    id: (index + 1).toString(),
    title: `Tech News Article ${index + 1}: This is a sample headline that could be longer`,
    category: ['AI', 'Startups', 'Cybersecurity', 'Web Dev'][Math.floor(Math.random() * 4)],
    image: `https://source.unsplash.com/random/800x600?tech=${index}`,
    timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
}));

