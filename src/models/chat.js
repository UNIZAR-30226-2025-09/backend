export default (sequelize, DataTypes) => {
    const Chat = sequelize.define('chat', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user1_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user2_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      txt_message: {
        type: DataTypes.TEXT
      },
      sent_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, {
      tableName: 'chat',
      timestamps: false
    });
  
    Chat.associate = (models) => {
        Chat.belongsTo(models.user, { 
          foreignKey: 'user1_id', 
          as: 'sender',
          targetKey: 'id',
          constraints: false        // Deshabilita la creación de restricciones
        });
        
        Chat.belongsTo(models.user, { 
          foreignKey: 'user2_id', 
          as: 'receiver',
          targetKey: 'id',
          constraints: false        // Deshabilita la creación de restricciones
        });
    };
  
    return Chat;
  };