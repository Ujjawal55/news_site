import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { NewsItem } from '../types/news';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
    news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s ease-in-out'
                }
            }}
            onClick={() => navigate(`/news/${news.id}`)}
        >
            <CardMedia
                component="img"
                height="200"
                image={news.image}
                alt={news.title}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography
                        variant="overline"
                        color="secondary"
                    >
                        {news.category}
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        mb: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {news.title}
                </Typography>
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {new Date(news.timestamp).toLocaleDateString()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NewsCard;

