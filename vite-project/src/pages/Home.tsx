import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import AddProductModal from '../components/AddProductModal';
import { Product } from '../types/Product';
import './Home.css';

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: 'Ноутбук Apple MacBook Air',
            description: '13.3" Retina, Apple M1, 8GB RAM, 256GB SSD, серый космос',
            price: 89990,
            imageUrl: 'https://apple-rostov.com/image/cache/catalog/apple-macbook-air-15-m2/apple-macbook-air-15-m2-2-TB-midnight-800x800-product_popup.jpg'
        },
        {
            id: 2,
            name: 'Смартфон Samsung Galaxy S23',
            description: '6.1" Dynamic AMOLED, 128GB, 50MP камера, черный',
            price: 64990,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5e5klzVsbYlEUUK9Z1mhHiR31efYXmbUZw&s'
        },
        {
            id: 3,
            name: 'Наушники Sony WH-1000XM5',
            description: 'Беспроводные, шумоподавление, 30 часов работы',
            price: 29990,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTQ3aBpq04l052rWuPphU1BKPNBvW5JWJVA&s'
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
        const product: Product = {
            ...newProduct,
            id: Math.max(...products.map(p => p.id), 0) + 1
        };
        setProducts([...products, product]);
        setIsModalOpen(false);
    };

    return (
        <div className="home-page">
            <div className="home-header">
                <h1>Наши товары</h1>
                <button className="add-product-btn" onClick={() => setIsModalOpen(true)}>
                    + Добавить товар
                </button>
            </div>

            {products.length === 0 ? (
                <div className="empty-state">
                    <p>Пока нет товаров. Добавьте первый товар!</p>
                </div>
            ) : (
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            <AddProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddProduct}
            />
        </div>
    );
};

export default Home;