import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';

/** 엔진 - !!!!!!!!!! 수정 시 반드시 DB도 수정해야 함 !!!!!!!!!! */
const Engine = { GG: 'Google Gemini', GC: 'Google Cloud', OC: 'OpenAi Chat-GPT' };
export type TAi$Engine = keyof typeof Engine;
export const TAi$Engine = makeEnum('engine', Engine, { GG: 'GoogleGemini', GC: 'GoogleCloud', OC: 'OpenAiChatGpt' });

/** 구분 - !!!!!!!!!! 수정 시 반드시 DB도 수정해야 함 !!!!!!!!!! */
const Type = {
  SUBJECT: '주제',
  CONTENT: '뉴스 기사',
  IMG: '이미지',
  WORD: '단어',
  TTS: 'TTS',
  IDIOM: '사자성어',
  IDIOM_EX: '사자성어 예문',
};
export type TAi$Type = keyof typeof Type;
export const TAi$Type = makeEnum('type', Type);

/** 상태 */
const Status = { WAIT: '대기중', PROCESSING: '처리중', SUCCESS: '성공', FAIL: '실패' };
export type TAi$Status = keyof typeof Status;
export const TAi$Status = makeEnum('status', Status);

export interface TAi {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  engine: TAi$Engine; // 엔진
  type: TAi$Type; // 구분
  req_text: string; // 요청 텍스트 // text
  res_text: string | null; // 응답 텍스트 // longtext, nullable
  status: TAi$Status; // 상태
  fail_reason: string | null; // 실패 사유 // text, nullable
  parent_id: number | null; // 부모 ID // int, nullable
  parent_sub_id: number | null; // 부모 하위 ID // int, nullable
  create_date: Date; // 등록일자 // datetime
  update_date: Date; // 수정일자 // datetime
}

export type TAi$InsertData = TableInsertData<TAi, 'id', 'res_text' | 'fail_reason' | 'parent_id' | 'parent_sub_id'>;
export type TAi$UpdateData = TableUpdateData<TAi, 'id' | 'engine' | 'type' | 'req_text', 'update_date'>;

export class TAiSubjectInfo {}
export default TAi;

declare module 'knex/types/tables' {
  interface Tables {
    ai: Knex.CompositeTableType<TAi, TAi$InsertData, TAi$UpdateData>;
  }
}
