import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import User from "./User.js";
import orderOptions from "./orderOptions.js";
class orderInfo extends Model {}

orderInfo.init(
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
        // orderoptions_id: {
		// 	type: DataTypes.INTEGER,
		// 	references: {
		// 		model: "orderoptions",
		// 		key: "id",
		// 	},
		// },
		orderoptions1_id: {
			type: DataTypes.STRING,
		},
		orderoptions2_id: {
			type: DataTypes.STRING,
		},
		orderoptions3_id: {
			type: DataTypes.STRING,
		},
		orderoptions4_id: {
			type: DataTypes.STRING,
		},
		orderoptions5_id: {
			type: DataTypes.STRING,
		},
		orderoptions6_id: {
			type: DataTypes.STRING,
		},
		orderoptions7_id: {
			type: DataTypes.STRING,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "user",
				key: "id",
		  	},
		}
    },
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "orderinfo",
	}
);

export default orderInfo;