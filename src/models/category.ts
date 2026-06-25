import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface CategoryAttributes {
  id: number;
  name: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

@Table({
  tableName: 'Categories',
})
export class Category extends Model<
  CategoryAttributes,
  CategoryCreationAttributes
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}