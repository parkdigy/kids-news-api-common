import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TIdiom from './Idiom';
import { makeEnum } from '@db_models_util';

/** 상태 */
const Level = { 1: '레벨 1', 2: '레벨 2', 3: '레벨 3' };
export type TIdiomLevel$Level = keyof typeof Level;
export const TIdiomLevel$Level = makeEnum('level', Level, { 1: 'Level1', 2: 'Level2', 3: 'Level3' });

export interface TIdiomLevel {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  idiom_level_key: string; // 사자성어 레벨 KEY // UQ, max:32
  idiom_id: TIdiom['id']; // 사자성어 ID // FK
  level: TIdiomLevel$Level;
  tts_url: string | null; // TTS URL // max:1024, nullable
  sentences: string; // 문장 // text
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TIdiomLevel$InsertData = TableInsertData<TIdiomLevel, 'id'>;
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
