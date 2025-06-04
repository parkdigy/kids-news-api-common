import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';
import TNewsCategory from './NewsCategory';

/** 상태 */
const Status = { WRITE: '작성중', WAIT: '노출대기중', ON: '노출중', OFF: '숨김' };
export type TNews$Status = keyof typeof Status;
export const TNews$Status = makeEnum('status', Status);

export interface TNews {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  news_key: string; // 뉴스 KEY // max:32 // UQ
  title: string; // 제목 // max:100
  img_url: string | null; // 이미지 URL // max:1024, nullable
  news_category_id: TNewsCategory['id']; // 뉴스 카테고리 ID // int, FK
  news_date: Date; // 뉴스 날짜 // date
  status: TNews$Status; // 상태
  create_date: Date; // 등록일자 // datetime
  update_date: Date; // 수정일자 // datetime
}

export type TNews$InsertData = TableInsertData<TNews, 'id', 'img_url'>;
export type TNews$UpdateData = TableUpdateData<TNews, 'id' | 'news_key' | 'create_date', 'update_date'>;

export default TNews;

declare module 'knex/types/tables' {
  interface Tables {
    news: Knex.CompositeTableType<TNews, TNews$InsertData, TNews$UpdateData>;
  }
}
