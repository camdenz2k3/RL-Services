import User from "./User.js";
import orderInfo from "./order.js";
import orderOptions from "./orderOptions.js";

User.hasMany(orderInfo, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
orderInfo.belongsTo(User, {
    foreignKey: "user_id"
});

orderOptions.hasMany(orderInfo, {
    foreignKey: "orderoptions_id"    
});
orderInfo.belongsTo(orderOptions, {
    foreignKey: "orderoptions_id"
});

export { User, orderInfo, orderOptions };
