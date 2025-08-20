import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';
import { TSaying } from '../Saying';

export interface TUserSaying {
  /** Primary Key */
  id: number; // PK, AI // bigint
  /** Others */
  user_id: TUser['id']; // 회원 ID
  saying_id: TSaying['id']; // 사자성어 ID
  study_level: number; // 학습 레벨 // tinyint, default=1
  last_study_date: Date | null; // 마지막 학습일자
  data_key: number; // 데이터 KEY // int, default=1
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserSaying$InsertData = TableInsertData<TUserSaying, 'id', 'study_level' | 'last_study_date' | 'data_key'>;
export type TUserSaying$UpdateData = TableUpdateData<
  TUserSaying,
  'id' | 'user_id' | 'saying_id' | 'create_date',
  'update_date'
>;

export default TUserSaying;

declare module 'knex/types/tables' {
  interface Tables {
    user_saying: Knex.CompositeTableType<TUserSaying, TUserSaying$InsertData, TUserSaying$UpdateData>;
  }
}
