import { connection } from '../sequelize';

export default async () => {
  try {
    await connection.sync({ force: true });
  } catch (e) {
    console.log(e.message);
  }
};
