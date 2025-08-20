import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { Level } from '@kc_types';

export interface TNewsWord {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  word: string; // 단어 // varchar(50)
  level: Level; // 레벨
  meaning: string; // 의미 // varchar(200)
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TNewsWord$InsertData = TableInsertData<TNewsWord, 'id'>;
export type TNewsWord$UpdateData = TableUpdateData<TNewsWord, 'id' | 'create_date', 'update_date'>;

export default TNewsWord;

declare module 'knex/types/tables' {
  interface Tables {
    news_word: Knex.CompositeTableType<TNewsWord, TNewsWord$InsertData, TNewsWord$UpdateData>;
  }
}
