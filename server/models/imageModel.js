module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define("Images", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // apartment_id: {
    //   type: DataTypes.STRING,
    // },
  });
  Images.associate = function (models) {
    Images.belongsTo(models.Apartments);
  };
  return Images;
};
