import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class order extends Model {}

order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: "user",
				key: "name",
			},
		},
        orderoptions_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "orderoptions",
				key: "id",
			},
		},
		user_id: {
			type: DataTypes.INTEGER,
      		allowNull: false,
      		primaryKey: true,
		}
    },
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "orders",
	}
);

export default order;