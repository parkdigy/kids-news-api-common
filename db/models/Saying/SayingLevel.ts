import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TSaying from './Saying';
import { Level } from '@kc_types';

export interface TSayingLevel {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  saying_level_key: string; // 속담 레벨 KEY // UQ, max:32
  saying_id: TSaying['id']; // 속담 ID // FK
  level: Level;
  tts_url: string | null; // TTS URL // max:1024, nullable
  meaning_tts_url: string | null; // 의미 TTS URL // max:1024, nullable
  sentences: string; // 문장 // text
  hidden_texts: string; // 숨김 텍스트 // text
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TSayingLevel$InsertData = TableInsertData<TSayingLevel, 'id', 'tts_url' | 'meaning_tts_url'>;
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
