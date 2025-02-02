import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    Paper,
    Chip,
    Divider,
    Tab,
    Tabs
} from '@mui/material';
import DetailPageSkeleton from '../components/DetailPageSkeleton';
import { mockNews } from '../utils/mockData';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


const NewsDetailPage = () => {
    const { id } = useParams();
    const [tabValue, setTabValue] = useState(0);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(mockNews.find(item => item.id === id));

    useEffect(() => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setNews(mockNews.find(item => item.id === id));
            setLoading(false);
        }, 1000);
    }, [id]);

    if (loading) {
        return <DetailPageSkeleton />;
    }

    if (!news) {
        return (
            <Container>
                <Typography variant="h5">Article not found</Typography>
            </Container>
        );
    }



    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                {/* Header Section */}
                <Box sx={{ mb: 4 }}>
                    <Chip
                        label={news.category}
                        color="secondary"
                        sx={{ mb: 2 }}
                    />
                    <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
                        {news.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {new Date(news.timestamp).toLocaleDateString()}
                    </Typography>
                </Box>

                {/* Featured Image */}
                <Box
                    component="img"
                    src={news.image}
                    alt={news.title}
                    sx={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        borderRadius: 1,
                        mb: 4
                    }}
                />

                {/* Content Tabs */}
                <Paper sx={{ mb: 4 }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        centered
                    >
                        <Tab label="Article" />
                        <Tab label="AI Summary" />
                    </Tabs>
                    <Divider />

                    <TabPanel value={tabValue} index={0}>
                        <Typography variant="body1">
                            {/* Replace with actual article content */}
                            This is where the full article content will go.
                            Currently using placeholder text for demonstration.
                        </Typography>
                    </TabPanel>

                    <TabPanel value={tabValue} index={1}>
                        <Typography variant="body1">
                            {/* Replace with AI-generated summary */}
                            This is where the AI-generated summary will appear.
                            We'll integrate this with your backend LLM service.
                        </Typography>
                    </TabPanel>
                </Paper>
            </Box>
        </Container>
    );
};

export default NewsDetailPage;

