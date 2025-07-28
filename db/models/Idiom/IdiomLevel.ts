import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { IdiomLevel } from '@kc_types';
import TIdiom from './Idiom';

export interface TIdiomLevel {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  idiom_level_key: string; // 사자성어 레벨 KEY // UQ, max:32
  idiom_id: TIdiom['id']; // 사자성어 ID // FK
  level: IdiomLevel;
  meaning: string; // 의미 // text
  etymology: string; // 어원 // text
  examples: string; // 예문 // text
  tts_url: string | null; // TTS URL // max:1024, nullable
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TIdiomLevel$InsertData = TableInsertData<TIdiomLevel, 'id', 'tts_url'>;
export type TIdiomLevel$UpdateData = TableUpdateData<
  TIdiomLevel,
  'id' | 'idiom_level_key' | 'idiom_id' | 'level' | 'create_date',
  'update_date'
>;

export default TIdiomLevel;

declare module 'knex/types/tables' {
  interface Tables {
    idiom_level: Knex.CompositeTableType<TIdiomLevel, TIdiomLevel$InsertData, TIdiomLevel$UpdateData>;
  }
}
