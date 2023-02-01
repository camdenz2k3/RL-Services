import User from "./user.js";
import order from "./order.js";
import orderOptions from "./orderOptions.js";

User.hasMany(order, {
    foreignKey: "user_name"
});
order.belongsTo(User, {
    foreignKey: "user_name"
});

order.hasMany(orderOptions, {
    foreignKey: "order_id"    
});
orderOptions.belongsTo(order, {
    foreignKey: "order_id"
});

export { User, order, orderOptions };
