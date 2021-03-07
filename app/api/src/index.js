import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import orderRouter from 'routers/orderRouter.js';
import productRouter from 'routers/productRouter.js';
import uploadRouter from 'routers/uploadRouter.js';
import userRouter from 'routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (_req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/api/config/google', (_req, res) => {
  res.send(process.env.GOOGLE_API_KEY || '');
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (_req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
