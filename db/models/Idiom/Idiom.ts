import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';

export interface TIdiom {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  title: string; // 사자성어: 한글(한문) // max:10
  kr_title: string; // 한글 사자성어 // max:10
  ch_title: string; // 한문 사자성어 // max:10
  ch_chars: string; // 한문 글자 정보 // text
  meaning: string; // 의미 // text
  etymology: string; // 어원 // text
  examples: string; // 예문 // text
  img_url: string | null; // 이미지 URL // max:1024, nullable
  img_title: string | null; // 이미지 제목 // varchar(100), nullable
  img_source: string | null; // 이미지 출처 // varchar(100), nullable
  tts_url: string | null; // TTS URL // max:1024, nullable
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TIdiom$InsertData = TableInsertData<TIdiom, 'id', 'img_url' | 'img_title' | 'img_source' | 'tts_url'>;
export type TIdiom$UpdateData = TableUpdateData<TIdiom, 'id' | 'create_date', 'update_date'>;

export default TIdiom;

declare module 'knex/types/tables' {
  interface Tables {
    idiom: Knex.CompositeTableType<TIdiom, TIdiom$InsertData, TIdiom$UpdateData>;
  }
}
