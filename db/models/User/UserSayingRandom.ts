import { Knex } from 'knex';
import { TableInsertData } from '@db_models_types';
import TUser from './User';
import { TSaying } from '../Saying';

export interface TUserSayingRandom {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  saying_id: TSaying['id']; // 사자성어 ID
  /** Others */
  create_date: Date; // 등록일자
}

export type TUserSayingRandom$InsertData = TableInsertData<TUserSayingRandom>;

export default TUserSayingRandom;

declare module 'knex/types/tables' {
  interface Tables {
    user_saying_random: Knex.CompositeTableType<TUserSayingRandom, TUserSayingRandom$InsertData>;
  }
}
