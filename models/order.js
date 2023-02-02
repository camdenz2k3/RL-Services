import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import User from "./User.js";
import orderOptions from "./orderOptions.js";
class order extends Model {}

order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        orderoptions_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: orderOptions,
				key: "id",
			},
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: User,
				key: "id",
		  	},
		}
    },
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "order",
	}
);

export default order;