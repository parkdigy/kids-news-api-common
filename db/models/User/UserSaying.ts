import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';
import { TSaying } from '../Saying';

export interface TUserSaying {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  saying_id: TSaying['id']; // 사자성어 ID
  /** Others */
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserSaying$InsertData = TableInsertData<TUserSaying>;
export type TUserSaying$UpdateData = TableUpdateData<
  TUserSaying,
  'user_id' | 'saying_id' | 'create_date',
  'update_date'
>;

export default TUserSaying;

declare module 'knex/types/tables' {
  interface Tables {
    user_saying: Knex.CompositeTableType<TUserSaying, TUserSaying$InsertData, TUserSaying$UpdateData>;
  }
}
