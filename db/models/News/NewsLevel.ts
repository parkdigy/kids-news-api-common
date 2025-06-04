import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TNews from './News';
import { TNewsCategory } from '@kac_db_models';

export interface TNewsLevel {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  news_level_key: string; // 뉴스 레벨 KEY // varchar(32), UQ
  news_id: TNews['id']; // 뉴스 ID // int, FK
  level: number; // 레벨 // tinyint
  news_date: Date; // 뉴스 날짜 // date
  news_category_id: TNewsCategory['id']; // 뉴스 카테고리 ID // int, FK
  title: string; // 제목 // varchar(100)
  description: string; // 소개 내용 // text
  words: string | null; // 단어 // text, nullable
  img_url: string | null; // 이미지 URL // varchar(1024), nullable
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TNewsLevel$InsertData = TableInsertData<TNewsLevel, 'id', 'words' | 'img_url'>;
export type TNewsLevel$UpdateData = TableUpdateData<TNewsLevel, 'id' | 'news_id' | 'create_date', 'update_date'>;

export default TNewsLevel;

declare module 'knex/types/tables' {
  interface Tables {
    news_level: Knex.CompositeTableType<TNewsLevel, TNewsLevel$InsertData, TNewsLevel$UpdateData>;
  }
}
