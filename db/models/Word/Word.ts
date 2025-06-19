import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { TNewsLevel$Level } from '@kac_db_models';

export interface TWord {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  word: string; // 단어 // varchar(50)
  level: TNewsLevel$Level; // 레벨
  meaning: string; // 의미 // varchar(200)
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TWord$InsertData = TableInsertData<TWord, 'id'>;
export type TWord$UpdateData = TableUpdateData<TWord, 'id' | 'create_date', 'update_date'>;

export default TWord;

declare module 'knex/types/tables' {
  interface Tables {
    word: Knex.CompositeTableType<TWord, TWord$InsertData, TWord$UpdateData>;
  }
}
