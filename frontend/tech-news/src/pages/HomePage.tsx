import { useState, useEffect } from 'react';
import { Container, Grid, Box, Pagination } from '@mui/material';
import NewsCard from '../components/NewsCard';
import NewsCardSkeleton from '../components/NewsCardSkeleton';
import { mockNews } from '../utils/mockData';

const ITEMS_PER_PAGE = 9;

const HomePage = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [page]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paginatedNews = mockNews.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                <Grid container spacing={3}>
                    {loading
                        ? Array.from(new Array(ITEMS_PER_PAGE)).map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <NewsCardSkeleton />
                            </Grid>
                        ))
                        : paginatedNews.map((news) => (
                            <Grid item xs={12} sm={6} md={4} key={news.id}>
                                <NewsCard news={news} />
                            </Grid>
                        ))
                    }
                </Grid>
                <Box sx={{
                    mt: 4,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Pagination
                        count={Math.ceil(mockNews.length / ITEMS_PER_PAGE)}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        disabled={loading}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default HomePage;

