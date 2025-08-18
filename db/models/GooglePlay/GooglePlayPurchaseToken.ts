import { Knex } from 'knex';
import { TableInsertData } from '@db_models_types';

export interface TGooglePlayPurchaseToken {
  /** Primary Key */
  purchase_token: string; // 구매 토큰 // max:255
  /** Others */
  uuid: string; // 회원 UUID // max:36
  create_date: Date; // 등록일자
}

export type TGooglePlayPurchaseToken$InsertData = TableInsertData<TGooglePlayPurchaseToken>;

export default TGooglePlayPurchaseToken;

declare module 'knex/types/tables' {
  interface Tables {
    google_play_purchase_token: Knex.CompositeTableType<TGooglePlayPurchaseToken, TGooglePlayPurchaseToken$InsertData>;
  }
}
