import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

class product extends Model {}

product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
		product_type: {
			type: DataTypes.STRING,
            allowNull: false,
		},
        quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
    },
    {
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "product",
	}
);

export default product;