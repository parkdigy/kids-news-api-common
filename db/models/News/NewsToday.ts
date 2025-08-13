import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TNews from './News';

export interface TNewsToday {
  /** Primary Key */
  id: number; // PK, int // (YYYYMMDD)
  /** Others */
  news_id: TNews['id']; // 뉴스 ID
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TNewsToday$InsertData = TableInsertData<TNewsToday>;
export type TNewsToday$UpdateData = TableUpdateData<TNewsToday, 'id' | 'create_date', 'update_date'>;

export default TNewsToday;

declare module 'knex/types/tables' {
  interface Tables {
    news_today: Knex.CompositeTableType<TNewsToday, TNewsToday$InsertData, TNewsToday$UpdateData>;
  }
}
