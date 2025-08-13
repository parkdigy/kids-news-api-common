import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';

/** 상태 */
const Status = { ON: '노출중', OFF: '숨김' };
export type TSaying$Status = keyof typeof Status;
export const TSaying$Status = makeEnum('status', Status);

export interface TSaying {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  saying_key: string; // 속담 KEY // UQ, max:32
  title: string; // 속담 // max:50
  img_url: string | null; // 이미지 URL // max:1024, nullable
  low_img_url: string | null; // 낮은 해상도 이미지 URL // max:1024, nullable
  thumb_img_url: string | null; // 썸네일 이미지 URL // max:1024, nullable
  img_title: string | null; // 이미지 제목 // varchar(100), nullable
  img_source: string | null; // 이미지 출처 // varchar(100), nullable
  tts_url: string | null; // TTS URL // max:1024, nullable
  is_free: boolean; // 무료 여부 // default: false
  status: TSaying$Status;
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TSaying$InsertData = TableInsertData<
  TSaying,
  'id',
  'img_url' | 'low_img_url' | 'thumb_img_url' | 'img_title' | 'img_source' | 'tts_url' | 'is_free'
>;
export type TSaying$UpdateData = TableUpdateData<TSaying, 'id' | 'saying_key' | 'create_date', 'update_date'>;

export default TSaying;

declare module 'knex/types/tables' {
  interface Tables {
    saying: Knex.CompositeTableType<TSaying, TSaying$InsertData, TSaying$UpdateData>;
  }
}
