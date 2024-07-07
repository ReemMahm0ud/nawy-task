module.exports = (sequelize, DataTypes) => {
  const Apartments = sequelize.define("Apartments", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    down_payment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    installments: {
      type: DataTypes.INTEGER,
    },
  });

  Apartments.associate = function (models) {
    Apartments.hasMany(models.Images);
  };

  return Apartments;
};
