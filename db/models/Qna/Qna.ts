/********************************************************************************************************************
 * 문의 테이블
 * ******************************************************************************************************************/

import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';
import TQnaCategory from './QnaCategory';
import { TUser, TUserLogin$Os } from '../User';
import { TDevice } from '../Device';

/** 상태 */
const Status = { Q: '문의', A: '답변완료', RESIGN: '회원탈퇴' };
export type TQna$Status = keyof typeof Status;
export const TQna$Status = makeEnum('status', Status, {
  Q: 'Question',
  A: 'Answer',
  RESIGN: 'Resign',
});

export interface TQna {
  /** Primary Key */
  id: number; // ID // AI, int
  /** Others */
  user_id: TUser['id']; // 회원 ID
  qna_category_id: TQnaCategory['id']; // 카테고리 ID
  question: string; // 문의 내용 // text
  answer: string | null; // 답변 내용 // text
  is_check: boolean; // CHECK 여부 // default:false
  os: TUserLogin$Os; // 가입 OS
  os_version: string; // OS 버전 // max:20
  build_number: string; // 빌드 번호 // max:10
  device_id: TDevice['id']; // 디바이스 ID
  eas_id: string | null; // EAS ID // max:36
  status: TQna$Status; // 상태
  is_user_confirm: boolean; // 회원 확인 여부 // default:false
  process_date: Date; // 처리일자 (상태가 변경된 일자)
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TQna$InsertData = TableInsertData<TQna, 'id' | 'answer', 'is_check' | 'is_user_confirm' | 'eas_id'>;
export type TQna$UpdateData = TableUpdateData<
  TQna,
  'id' | 'user_id' | 'qna_category_id' | 'question' | 'os' | 'os_version' | 'device_id' | 'eas_id' | 'create_date',
  'update_date'
>;

export default TQna;

declare module 'knex/types/tables' {
  interface Tables {
    qna: Knex.CompositeTableType<TQna, TQna$InsertData, TQna$UpdateData>;
  }
}
