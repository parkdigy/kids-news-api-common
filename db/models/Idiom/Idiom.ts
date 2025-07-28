import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';

/** 상태 */
const Status = { ON: '노출중', OFF: '숨김' };
export type TIdiom$Status = keyof typeof Status;
export const TIdiom$Status = makeEnum('status', Status);

export interface TIdiom {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  idiom_key: string; // 사자성어 KEY // UQ, max:32
  title: string; // 사자성어: 한글(한문) // max:10
  kr_title: string; // 한글 사자성어 // UQ, max:10
  ch_title: string; // 한문 사자성어 // UQ, max:10
  ch_chars: string; // 한문 글자 정보 // text
  img_url: string | null; // 이미지 URL // max:1024, nullable
  thumb_img_url: string | null; // 썸네일 이미지 URL // max:1024, nullable
  img_title: string | null; // 이미지 제목 // varchar(100), nullable
  img_source: string | null; // 이미지 출처 // varchar(100), nullable
  tts_url: string | null; // TTS URL // max:1024, nullable
  status: TIdiom$Status;
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TIdiom$InsertData = TableInsertData<
  TIdiom,
  'id',
  'img_url' | 'thumb_img_url' | 'img_title' | 'img_source' | 'tts_url'
>;
export type TIdiom$UpdateData = TableUpdateData<TIdiom, 'id' | 'idiom_key' | 'create_date', 'update_date'>;

export default TIdiom;

declare module 'knex/types/tables' {
  interface Tables {
    idiom: Knex.CompositeTableType<TIdiom, TIdiom$InsertData, TIdiom$UpdateData>;
  }
}
