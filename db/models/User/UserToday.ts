import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';
import { TIdiom } from '../Idiom';
import { TSaying } from '../Saying';
import { TNews } from '../News';

export interface TUserToday {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  day: number; // 날짜 (YYYYMMDD)
  /** Others */
  news_id: TNews['id']; // 뉴스 ID
  idiom_id: TIdiom['id'] | null; // 사자성어 ID // nullable
  is_idiom_get: boolean; // 사자성어 획득 여부 // default=false
  saying_id: TSaying['id'] | null; // 속담 ID // nullable
  is_saying_get: boolean; // 속담 획득 여부 // default=false
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserToday$InsertData = TableInsertData<TUserToday, never, 'is_idiom_get' | 'is_saying_get'>;
export type TUserToday$UpdateData = TableUpdateData<TUserToday, 'user_id' | 'day' | 'create_date', 'update_date'>;

export default TUserToday;

declare module 'knex/types/tables' {
  interface Tables {
    user_today: Knex.CompositeTableType<TUserToday, TUserToday$InsertData, TUserToday$UpdateData>;
  }
}
