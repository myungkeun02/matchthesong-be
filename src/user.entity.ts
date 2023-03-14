import {
  Model,
  Table,
  Column,
  DataType,
  Sequelize,
} from 'sequelize-typescript';

@Table({
  tableName: 'user',
  timestamps: false,
})
export class UserEntity extends Model<UserEntity> {
  @Column({
    field: 'user_id',
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    comment: 'gptid',
  })
  id: number;

  @Column({
    field: 'user_name',
    type: DataType.STRING(16),
    allowNull: false,
    comment: '유저 이름',
  })
  keyword: string;
}
