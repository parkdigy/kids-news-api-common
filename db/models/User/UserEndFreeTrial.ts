import { Knex } from 'knex';
import { TableInsertData } from '@db_models_types';

export interface TUserEndFreeTrial {
  /** Primary Key */
  id: number; // PK, AI // int
  /** Others */
  sns_user_id: string | null; // SNS 사용자 ID // max:200
  reg_app_key: string | null; // 가입 앱 키 // max:32
  create_date: Date; // 등록일자
}

export type TUserEndFreeTrial$InsertData = TableInsertData<TUserEndFreeTrial, 'id', 'sns_user_id' | 'reg_app_key'>;

export default TUserEndFreeTrial;

declare module 'knex/types/tables' {
  interface Tables {
    user_end_free_trial: Knex.CompositeTableType<TUserEndFreeTrial, TUserEndFreeTrial$InsertData>;
  }
}
