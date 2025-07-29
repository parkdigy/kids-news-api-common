import { Knex } from 'knex';
import { TableInsertData } from '@db_models_types';
import TUser from './User';
import { TNewsLevel } from '../News/NewsLevel';

export interface TUserNewsLevelBookmark {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  news_level_id: TNewsLevel['id']; // 뉴스 레벨 ID
  /** Others */
  create_date: Date; // 등록일자
}

export type TUserNewsLevelBookmark$InsertData = TableInsertData<TUserNewsLevelBookmark>;

export default TUserNewsLevelBookmark;

declare module 'knex/types/tables' {
  interface Tables {
    user_news_level_bookmark: Knex.CompositeTableType<TUserNewsLevelBookmark, TUserNewsLevelBookmark$InsertData>;
  }
}
