import { Knex } from 'knex';
import { TableInsertData } from '@db_models_types';
import TUser from './User';
import { TIdiom } from '../Idiom';

export interface TUserIdiomRandom {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  idiom_id: TIdiom['id']; // 사자성어 ID
  /** Others */
  create_date: Date; // 등록일자
}

export type TUserIdiomRandom$InsertData = TableInsertData<TUserIdiomRandom>;

export default TUserIdiomRandom;

declare module 'knex/types/tables' {
  interface Tables {
    user_idiom_random: Knex.CompositeTableType<TUserIdiomRandom, TUserIdiomRandom$InsertData>;
  }
}
