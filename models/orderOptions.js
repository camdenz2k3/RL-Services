import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class orderOptions extends Model {}

orderOptions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      order_option: {
			  type: DataTypes.STRING,
        allowNull: false,
		  },
    },
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "orderoptions",
	}
);

export default orderOptions;