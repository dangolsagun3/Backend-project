import express from 'express';
import connect from './db/connect.js';
import productRoutes from './routes/product.js';

const app = express();
const port = 8080;
    
connect();

app.use(express.json());
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
