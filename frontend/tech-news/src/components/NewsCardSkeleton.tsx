import { Card, CardContent, Skeleton } from '@mui/material';

const NewsCardSkeleton = () => {
    return (
        <Card sx={{ height: '100%' }}>
            <Skeleton
                variant="rectangular"
                height={200}
                animation="wave"
            />
            <CardContent>
                <Skeleton
                    variant="text"
                    width={100}
                    height={24}
                    sx={{ mb: 1 }}
                />
                <Skeleton
                    variant="text"
                    height={32}
                    sx={{ mb: 1 }}
                />
                <Skeleton
                    variant="text"
                    width={150}
                />
            </CardContent>
        </Card>
    );
};

export default NewsCardSkeleton;

