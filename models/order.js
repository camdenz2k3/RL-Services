import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";
import product from "./product";
import service from "./service";
import user from "./user";

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
				model: user,
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