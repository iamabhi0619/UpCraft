import express from 'express';
import {
    getCourses,
    getCourseById,
    enrollCourse,
    getMyCourses,
    markLessonComplete,
    createCourse,
} from '../controllers/courseController.js';
import { protect, protectOptional } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public Routes (or Optional Auth)
router.get('/', getCourses);

// Protected Routes
router.get('/my-courses', protect, getMyCourses); // Specific path BEFORE parameterized path
router.post('/', protect, createCourse);
router.post('/:id/enroll', protect, enrollCourse);
router.post('/:id/lessons/:lessonId/complete', protect, markLessonComplete);

// Parameterized Route (Must be last generally)
router.get('/:id', protectOptional, getCourseById);

export default router;
