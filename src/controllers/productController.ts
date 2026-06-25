import { Request, Response } from 'express';
import { Product } from '../models/product';
import { Category } from '../models/category';

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.create(req.body);

    const productWithCategory = await Product.findByPk(product.id, {
      include: [Category],
    });

    res.status(200).json({
      status: 'success',
      message: 'Product successfully created',
      payload: productWithCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error creating product',
      payload: error,
    });
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.findAll({
      include: [Category],
    });

    res.status(200).json({
      status: 'success',
      message: 'Products successfully retrieved',
      payload: products,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error retrieving products',
      payload: error,
    });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const product = await Product.findByPk(id, {
      include: [Category],
    });

    if (!product) {
      res.status(404).json({
        status: 'error',
        message: 'Product not found',
        payload: null,
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      message: 'Product successfully retrieved',
      payload: product,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error retrieving product',
      payload: error,
    });
  }
};

export const modifyProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({
        status: 'error',
        message: 'Product not found',
        payload: null,
      });
      return;
    }

    await product.update(req.body);

    const updatedProduct = await Product.findByPk(id, {
      include: [Category],
    });

    res.status(200).json({
      status: 'success',
      message: 'Product successfully updated',
      payload: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error updating product',
      payload: error,
    });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({
        status: 'error',
        message: 'Product not found',
        payload: null,
      });
      return;
    }

    await product.destroy();

    res.status(200).json({
      status: 'success',
      message: 'Product successfully deleted',
      payload: null,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error deleting product',
      payload: error,
    });
  }
};