export default (sequelize, DataTypes) => {
	return sequelize.define("order_status", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
	});
};
