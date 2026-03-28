import React, { useState } from 'react';
import { Product } from '../types/Product';
import './AddProductModal.css';

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (product: Omit<Product, 'id'>) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.description || !formData.price || !formData.imageUrl) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const price = parseFloat(formData.price);
        if (isNaN(price) || price <= 0) {
            alert('Пожалуйста, введите корректную цену');
            return;
        }

        onAdd({
            name: formData.name,
            description: formData.description,
            price: price,
            imageUrl: formData.imageUrl
        });

        // Сбрасываем форму
        setFormData({
            name: '',
            description: '',
            price: '',
            imageUrl: ''
        });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Добавить новый товар</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <form onSubmit={handleSubmit} className="add-product-form">
                    <div className="form-group">
                        <label htmlFor="name">Название товара *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Введите название товара"
                            autoFocus
                            required
                            
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Описание *</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Введите описание товара"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Цена (₽) *</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Введите цену"
                            step="0.01"
                            min="0"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageUrl">URL изображения *</label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>
                            Отмена
                        </button>
                        <button type="submit" className="submit-btn">
                            Добавить товар
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;