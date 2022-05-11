import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/userInterface';

export default class UserModel {

  public async getAll(): Promise<IUser[]> {
    const result = await connection.execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as IUser[];
  }
}