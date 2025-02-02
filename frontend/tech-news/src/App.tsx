import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';
import Navbar from './components/Navbar';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/news/:id" element={<NewsDetailPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;

