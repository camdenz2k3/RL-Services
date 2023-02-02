import User from "./user.js";
import order from "./order.js";
import orderOptions from "./orderOptions.js";

User.hasMany(order, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
order.belongsTo(User, {
    foreignKey: "user_id"
});

orderOptions.hasMany(order, {
    foreignKey: "orderoptions_id"    
});
order.belongsTo(orderOptions, {
    foreignKey: "orderoptions_id"
});

export { User, order, orderOptions };
