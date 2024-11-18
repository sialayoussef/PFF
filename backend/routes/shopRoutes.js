import express from 'express';

const router = express.Router();

// Sample Products Data - Replace with your database models
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

// @route    GET /api/products
// @desc     Get all products
router.get('/products', (req, res) => {
    res.json(products);
});

// @route    GET /api/products/:id
// @desc     Get product by ID
router.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    res.json(product);
});

// You can add more routes here (e.g., create, update, delete products)

export default router;
