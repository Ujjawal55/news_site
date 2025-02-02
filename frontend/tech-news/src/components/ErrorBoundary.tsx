// components/ErrorBoundary.tsx
import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Button,
    Box
} from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error
        };
    }

    handleRetry = () => {
        this.setState({ hasError: false });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Container maxWidth="sm">
                    <Paper
                        sx={{
                            p: 4,
                            mt: 8,
                            textAlign: 'center',
                            backgroundColor: 'background.paper'
                        }}
                    >
                        <ErrorIcon color="error" sx={{ fontSize: 64, mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Oops! Something went wrong
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            {this.state.error?.message || 'An unexpected error occurred'}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Button
                                variant="contained"
                                onClick={this.handleRetry}
                                sx={{ mr: 2 }}
                            >
                                Retry
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => window.location.href = '/'}
                            >
                                Go Home
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

