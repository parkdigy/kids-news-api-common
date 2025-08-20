import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';
import { TSaying } from '../Saying';

export interface TUserTodaySayingQuiz$ListItem {
  id: TSaying['id'];
  lv: number;
}
export type TUserTodaySayingQuiz$List = TUserTodaySayingQuiz$ListItem[];

export interface TUserTodaySayingQuiz$ResultListItem {
  id: TSaying['id'];
  c: boolean; // correct
  h: boolean; // hint
  lv: number;
}
export type TUserTodaySayingQuiz$ResultList = TUserTodaySayingQuiz$ResultListItem[];

export interface TUserTodaySayingQuiz {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  day: number; // 날짜 (YYYYMMDD)
  /** Others */
  list: string; // 목록 (JSON 배열 형태) // text
  result: string | null; // 결과 (JSON 배열 형태) // text
  is_complete: boolean; // 사자성어 퀴즈 완료 여부 // default=false
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserTodaySayingQuiz$InsertData = TableInsertData<TUserTodaySayingQuiz, never, 'result' | 'is_complete'>;
export type TUserTodaySayingQuiz$UpdateData = TableUpdateData<
  TUserTodaySayingQuiz,
  'user_id' | 'day' | 'list' | 'create_date',
  'update_date'
>;

export default TUserTodaySayingQuiz;

declare module 'knex/types/tables' {
  interface Tables {
    user_today_saying_quiz: Knex.CompositeTableType<
      TUserTodaySayingQuiz,
      TUserTodaySayingQuiz$InsertData,
      TUserTodaySayingQuiz$UpdateData
    >;
  }
}
