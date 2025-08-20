import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TIdiom from './Idiom';
import { Level } from '@kc_types';

export interface TIdiomLevel {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  idiom_level_key: string; // 사자성어 레벨 KEY // UQ, max:32
  idiom_id: TIdiom['id']; // 사자성어 ID // FK
  level: Level;
  tts_url: string | null; // TTS URL // max:1024, nullable
  meaning_tts_url: string | null; // 의미 TTS URL // max:1024, nullable
  sentences: string; // 문장 // text
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TIdiomLevel$InsertData = TableInsertData<TIdiomLevel, 'id', 'tts_url' | 'meaning_tts_url'>;
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
