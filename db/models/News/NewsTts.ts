import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';

export interface TNewsTts {
  /** Primary Key */
  text: string; // 텍스트 // max:300
  /** Others */
  url: string; // TTS URL // max:1024
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TNewsTts$InsertData = TableInsertData<TNewsTts>;
export type TNewsTts$UpdateData = TableUpdateData<TNewsTts, 'text' | 'create_date', 'update_date'>;

export default TNewsTts;

declare module 'knex/types/tables' {
  interface Tables {
    news_tts: Knex.CompositeTableType<TNewsTts, TNewsTts$InsertData, TNewsTts$UpdateData>;
  }
}
