import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import product from "./product.js";
import service from "./service.js";
import User from "./user.js";

class order extends Model {}

order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
			type: DataTypes.INTEGER,
			references: {
				model: product,
				key: "id",
			},
		},
        service_id: {
			type: DataTypes.INTEGER,
			references: {
				model: service,
				key: "id",
			},
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: "id",
			},
		},
    },
    {
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "order",
	}
);

export default order;