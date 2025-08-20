import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';
import { TIdiom } from '../Idiom';

export interface TUserIdiom {
  /** Primary Key */
  id: number; // PK, AI // bigint
  /** Others */
  user_id: TUser['id']; // 회원 ID
  idiom_id: TIdiom['id']; // 사자성어 ID
  study_level: number; // 학습 레벨 // tinyint, default=1
  last_study_date: Date | null; // 마지막 학습일자
  data_key: number; // 데이터 KEY // int, default=1
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserIdiom$InsertData = TableInsertData<TUserIdiom, 'id', 'study_level' | 'last_study_date' | 'data_key'>;
export type TUserIdiom$UpdateData = TableUpdateData<
  TUserIdiom,
  'id' | 'user_id' | 'idiom_id' | 'create_date',
  'update_date'
>;

export default TUserIdiom;

declare module 'knex/types/tables' {
  interface Tables {
    user_idiom: Knex.CompositeTableType<TUserIdiom, TUserIdiom$InsertData, TUserIdiom$UpdateData>;
  }
}
