import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';

/** 구분 */
const Type = { SUBJECT: '주제', CONTENT: '뉴스 기사' };
export type TAiGemini$Type = keyof typeof Type;
export const TAiGemini$Type = makeEnum('status', Type);

/** 상태 */
const Status = { WAIT: '대기중', PROCESSING: '처리중', SUCCESS: '성공', FAIL: '실패' };
export type TAiGemini$Status = keyof typeof Status;
export const TAiGemini$Status = makeEnum('status', Status);

export interface TAiGemini {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  type: TAiGemini$Type; // 구분
  req_text: string; // 요청 텍스트 // text
  res_text: string | null; // 응답 텍스트 // longtext, nullable
  status: TAiGemini$Status; // 상태
  fail_reason: string | null; // 실패 사유 // text, nullable
  create_date: Date; // 등록일자 // datetime
  update_date: Date; // 수정일자 // datetime
}

export type TAiGemini$InsertData = TableInsertData<TAiGemini, 'id', 'res_text' | 'fail_reason'>;
export type TAiGemini$UpdateData = TableUpdateData<TAiGemini, 'id' | 'type' | 'req_text', 'update_date'>;

export default TAiGemini;

declare module 'knex/types/tables' {
  interface Tables {
    ai_gemini: Knex.CompositeTableType<TAiGemini, TAiGemini$InsertData, TAiGemini$UpdateData>;
  }
}
