export default (sequelize, DataTypes) => {
	return sequelize.define("order", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		totalAmount: {
			type: DataTypes.FLOAT,
			defaultValue: 0
		},
		orderStatusId: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		},
	});
};
