import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TNewsLevel from './NewsLevel';

export interface TNewsLevelParagraph {
  /** Primary Key */
  news_level_id: TNewsLevel['id']; // PK, int
  paragraph_id: number; // 단락 ID // PK, tinyint
  /** Others */
  title: string; // 제목 // max:100
  content: string; // 내용 // text
  img_url: string | null; // 이미지 URL // varchar(1024)
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TNewsLevelParagraph$InsertData = TableInsertData<TNewsLevelParagraph, never, 'img_url'>;
export type TNewsLevelParagraph$UpdateData = TableUpdateData<
  TNewsLevelParagraph,
  'news_level_id' | 'create_date',
  'update_date'
>;

export default TNewsLevelParagraph;

declare module 'knex/types/tables' {
  interface Tables {
    news_level_paragraph: Knex.CompositeTableType<
      TNewsLevelParagraph,
      TNewsLevelParagraph$InsertData,
      TNewsLevelParagraph$UpdateData
    >;
  }
}
