import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';
import { TIdiom } from '../Idiom';

export interface TUserTodayIdiomQuiz$ListItem {
  id: TIdiom['id'];
  lv: number;
}
export type TUserTodayIdiomQuiz$List = TUserTodayIdiomQuiz$ListItem[];

export interface TUserTodayIdiomQuiz$ResultListItem {
  id: TIdiom['id'];
  c: boolean; // correct
  h: boolean; // hint
  lv: number;
}
export type TUserTodayIdiomQuiz$ResultList = TUserTodayIdiomQuiz$ResultListItem[];

export interface TUserTodayIdiomQuiz {
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

export type TUserTodayIdiomQuiz$InsertData = TableInsertData<TUserTodayIdiomQuiz, never, 'result' | 'is_complete'>;
export type TUserTodayIdiomQuiz$UpdateData = TableUpdateData<
  TUserTodayIdiomQuiz,
  'user_id' | 'day' | 'list' | 'create_date',
  'update_date'
>;

export default TUserTodayIdiomQuiz;

declare module 'knex/types/tables' {
  interface Tables {
    user_today_idiom_quiz: Knex.CompositeTableType<
      TUserTodayIdiomQuiz,
      TUserTodayIdiomQuiz$InsertData,
      TUserTodayIdiomQuiz$UpdateData
    >;
  }
}
