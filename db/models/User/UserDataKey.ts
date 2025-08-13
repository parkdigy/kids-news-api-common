import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';

/** ID */
export const TUserDataKey$Id = {
  All: 'all',
} as const;
export type TUserDataKey$Id = ValueOf<typeof TUserDataKey$Id>;

export interface TUserDataKey {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  data_id: string; // ID // max:20
  /** Others */
  data_key: number; // 데이터 변경 KEY (변경 시 마다 1 증가) : bigint
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserDataKey$InsertData = TableInsertData<TUserDataKey>;
export type TUserDataKey$UpdateData = TableUpdateData<
  TUserDataKey,
  'user_id' | 'data_id' | 'create_date',
  'update_date'
>;

export default TUserDataKey;

declare module 'knex/types/tables' {
  interface Tables {
    user_data_key: Knex.CompositeTableType<TUserDataKey, TUserDataKey$InsertData, TUserDataKey$UpdateData>;
  }
}
