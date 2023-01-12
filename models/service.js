import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

class service extends Model {}

service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          service_type: {
			type: DataTypes.STRING,
            allowNull: false,
		},
    },
    {
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "service",
	}
);

export default service;