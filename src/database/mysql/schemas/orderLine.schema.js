export default (sequelize, DataTypes) => {
	return sequelize.define("order_line", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		},
		price: {
			type: DataTypes.FLOAT,
			defaultValue: 0
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: 0
		}
	});
};
