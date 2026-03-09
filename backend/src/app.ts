import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import chatRoutes from './routes/chatRoutes';
import messageRoutes from './routes/mesageRoutes';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'ok' , 
        timestamp: new Date().toISOString() , 
        uptime: process.uptime() , 
        memoryUsage: process.memoryUsage() , 
        message: 'Server is healthy' 
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/chats", chatRoutes);

export default app;