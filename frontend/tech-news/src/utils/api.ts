import { NewsItem } from '../types/news';

export const api = {
    getNews: async (page: number, limit: number): Promise<NewsItem[]> => {
        // This will be replaced with your actual API call
        const response = await fetch(`/api/news?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        return response.json();
    },

    getNewsById: async (id: string): Promise<NewsItem> => {
        // This will be replaced with your actual API call
        const response = await fetch(`/api/news/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch news details');
        }
        return response.json();
    },

    getSummary: async (id: string): Promise<string> => {
        // This will be replaced with your LLM API call
        const response = await fetch(`/api/news/${id}/summary`);
        if (!response.ok) {
            throw new Error('Failed to generate summary');
        }
        return response.json();
    }
};

