import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';

export interface TChChar {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  ch_char: string; // 한자 // max:1
  meaning: string; // 훈 // max:20
  sound: string; // 음 // max:1
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TChChar$InsertData = TableInsertData<TChChar, 'id'>;
export type TChChar$UpdateData = TableUpdateData<TChChar, 'id' | 'create_date', 'update_date'>;

export default TChChar;

declare module 'knex/types/tables' {
  interface Tables {
    ch_char: Knex.CompositeTableType<TChChar, TChChar$InsertData, TChChar$UpdateData>;
  }
}
