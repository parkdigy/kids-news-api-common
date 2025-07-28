import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';

export interface TAiTts {
  /** Primary Key */
  text: string; // 텍스트 // max:300
  /** Others */
  url: string; // TTS URL // max:1024
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TAiTts$InsertData = TableInsertData<TAiTts>;
export type TAiTts$UpdateData = TableUpdateData<TAiTts, 'text' | 'create_date', 'update_date'>;

export default TAiTts;

declare module 'knex/types/tables' {
  interface Tables {
    ai_tts: Knex.CompositeTableType<TAiTts, TAiTts$InsertData, TAiTts$UpdateData>;
  }
}
