import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TNews from './News';

export interface TNewsCategory {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  name: string; // 카테고리명 // max:20
  icon_url: string; // 아이콘 URL // max:1024
  news_count: number; // 뉴스 수 // int // default:0
  last_news_date: Date | null; // 마지막 뉴스 날짜 // date, nullable
  last_news_id: TNews['id']; // 마지막 뉴스 ID // int, FK, nullable
  view_seq: number; // 노출 순서 // int
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TNewsCategory$InsertData = TableInsertData<
  TNewsCategory,
  'id',
  'news_count' | 'last_news_date' | 'last_news_id'
>;
export type TNewsCategory$UpdateData = TableUpdateData<TNewsCategory, 'id' | 'create_date', 'update_date'>;

export default TNewsCategory;

declare module 'knex/types/tables' {
  interface Tables {
    news_category: Knex.CompositeTableType<TNewsCategory, TNewsCategory$InsertData, TNewsCategory$UpdateData>;
  }
}
