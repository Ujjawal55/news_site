import { Container, Box, Skeleton } from '@mui/material';

const DetailPageSkeleton = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                {/* Header Skeleton */}
                <Box sx={{ mb: 4 }}>
                    <Skeleton width={100} height={32} sx={{ mb: 2 }} />
                    <Skeleton variant="text" height={60} sx={{ mb: 1 }} />
                    <Skeleton variant="text" height={60} sx={{ mb: 2 }} />
                    <Skeleton width={200} height={24} />
                </Box>

                {/* Image Skeleton */}
                <Skeleton
                    variant="rectangular"
                    height={400}
                    sx={{ mb: 4, borderRadius: 1 }}
                />

                {/* Content Skeleton */}
                <Box sx={{ mb: 4 }}>
                    <Skeleton height={48} sx={{ mb: 2 }} />
                    {Array.from(new Array(6)).map((_, index) => (
                        <Skeleton
                            key={index}
                            height={24}
                            sx={{ mb: 1 }}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default DetailPageSkeleton;

