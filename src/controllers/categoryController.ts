import { Request, Response } from 'express';
import { Category } from '../models/category';

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await Category.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Category successfully created',
      payload: category,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error creating category',
      payload: error,
    });
  }
};

export const getAllCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await Category.findAll();

    res.status(200).json({
      status: 'success',
      message: 'Categories successfully retrieved',
      payload: categories,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error retrieving categories',
      payload: error,
    });
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const category = await Category.findByPk(id);

    if (!category) {
      res.status(404).json({
        status: 'error',
        message: 'Category not found',
        payload: null,
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      message: 'Category successfully retrieved',
      payload: category,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error retrieving category',
      payload: error,
    });
  }
};