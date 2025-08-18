/********************************************************************************************************************
 * 문의 카테고리 테이블
 * ******************************************************************************************************************/

import { Knex } from 'knex';
import { makeEnum } from '@db_models_util';

/** 상태 */
const Status = { ON: '노출', OFF: '숨김' };
export type TQnaCategory$Status = keyof typeof Status;
export const TQnaCategory$Status = makeEnum('status', Status);

export interface TQnaCategory {
  /** Primary Key */
  id: number; // ID // AI
  /** Others */
  name: string; // 카테고리명 // max:10
  status: TQnaCategory$Status; // 상태
  view_seq: number; // 노출순서 // int
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export default TQnaCategory;

declare module 'knex/types/tables' {
  interface Tables {
    qna_category: Knex.CompositeTableType<TQnaCategory, never, never>;
  }
}
