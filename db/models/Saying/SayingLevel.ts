import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TSaying from './Saying';
import { makeEnum } from '@db_models_util';

/** 상태 */
const Level = { 1: '레벨 1', 2: '레벨 2', 3: '레벨 3' };
export type TSayingLevel$Level = keyof typeof Level;
export const TSayingLevel$Level = makeEnum('level', Level, { 1: 'Level1', 2: 'Level2', 3: 'Level3' });

export interface TSayingLevel {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  saying_level_key: string; // 속담 레벨 KEY // UQ, max:32
  saying_id: TSaying['id']; // 속담 ID // FK
  level: TSayingLevel$Level;
  tts_url: string | null; // TTS URL // max:1024, nullable
  sentences: string; // 문장 // text
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TSayingLevel$InsertData = TableInsertData<TSayingLevel, 'id'>;
export type TSayingLevel$UpdateData = TableUpdateData<
  TSayingLevel,
  'id' | 'saying_level_key' | 'saying_id' | 'level' | 'create_date',
  'update_date'
>;

export default TSayingLevel;

declare module 'knex/types/tables' {
  interface Tables {
    saying_level: Knex.CompositeTableType<TSayingLevel, TSayingLevel$InsertData, TSayingLevel$UpdateData>;
  }
}
