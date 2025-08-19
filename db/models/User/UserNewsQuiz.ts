import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';
import { TNewsLevel } from '../News';
import { makeEnum } from '@db_models_util';

/** 상태 */
const Type = { L: '문해력', W: '단어', S: '문장완성' };
export type TUserNewsQuiz$Type = keyof typeof Type;
export const TUserNewsQuiz$Type = makeEnum('status', Type, { L: 'Literacy', W: 'Word', S: 'Sentence' });

export interface TUserNewsQuiz {
  /** Primary Key */
  id: number; // PK, AI // bigint
  /** Others */
  user_id: TUser['id']; // 회원 ID
  news_level_id: TNewsLevel['id']; // 뉴스 레벨 ID
  type: TUserNewsQuiz$Type; // 퀴즈 유형
  correct: number; // 정답 수 // int
  incorrect: number; // 오답 수 // int
  hint: number; // 힌트 사용 수 // int
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserNewsQuiz$InsertData = TableInsertData<TUserNewsQuiz, 'id'>;
export type TUserNewsQuiz$UpdateData = TableUpdateData<
  TUserNewsQuiz,
  'id' | 'user_id' | 'news_level_id' | 'type' | 'correct' | 'incorrect' | 'hint' | 'create_date',
  'update_date'
>;

export default TUserNewsQuiz;

declare module 'knex/types/tables' {
  interface Tables {
    user_news_quiz: Knex.CompositeTableType<TUserNewsQuiz, TUserNewsQuiz$InsertData, TUserNewsQuiz$UpdateData>;
  }
}
