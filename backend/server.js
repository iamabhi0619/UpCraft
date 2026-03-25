import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import lessonRoutes from './routes/lessonRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import userStatsRoutes from './routes/userStatsRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors({
//     origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'],
//     credentials: true
// }));
// app.use(express.json());

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
        'http://localhost:5176',
        'https://upcraft-flame.vercel.app',
        'https://upcraft-site.vercel.app'
    ],
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/v1/users', authRoutes); // Changed from /api/v1 meant for auth, let's keep it clean or alias
app.use('/api/v1', authRoutes); // Keep legacy /api/v1/login working
app.use('/api/v1/protected', protectedRoutes); // Add protected routes

app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/lessons', lessonRoutes);
app.use('/api/v1/quiz', quizRoutes);
app.use('/api/v1/certificates', certificateRoutes);
app.use('/api/v1/user', userStatsRoutes);

app.get('/', (req, res) => {
    res.send('UpCraft API is running...');
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
