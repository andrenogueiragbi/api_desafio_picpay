import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Substitua pelo caminho para o seu arquivo de banco de dados SQLite
    define: {
        timestamps: false, // Opcional: desativa a criação automática de campos "createdAt" e "updatedAt"
    },
    logging: true || false, // Defina esta opção como false

})

export default sequelize