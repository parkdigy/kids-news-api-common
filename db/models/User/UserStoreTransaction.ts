/********************************************************************************************************************
 * 회원 프리미엄 결제 내역 테이블
 * ******************************************************************************************************************/

import { Knex } from 'knex';
import { TableInsertData } from '@db_models_types';
import { makeEnum } from '@db_models_util';
import { TUser } from './User';

/** STORE */
const Store = { A: '앱스토어', G: '구글플레이' };
export type TUserStoreTransaction$Store = keyof typeof Store;
export const TUserStoreTransaction$Store = makeEnum('store', Store, { A: 'AppStore', G: 'GooglePlay' });

/** 상품 구분 */
const ProductType = { O: '일회성', S: '구독' };
export type TUserStoreTransaction$ProductType = keyof typeof ProductType;
export const TUserStoreTransaction$ProductType = makeEnum('product_type', ProductType, {
  O: 'OneTime',
  S: 'Subscription',
});

export interface TUserStoreTransaction {
  /** Primary Key */
  id: number; // ID // AI, int
  /** Others */
  user_id: TUser['id']; // 회원 ID
  store: TUserStoreTransaction$Store; // 구입 스토어
  transaction_id: number; // app_store_transaction.id or google_play_transaction.id // int
  product_type: TUserStoreTransaction$ProductType; // 상품 구분
  product_id: string; // 상품 ID // max:50
  create_date: Date; // 등록일자
}

export type TUserStoreTransaction$InsertData = TableInsertData<TUserStoreTransaction, 'id'>;

export default TUserStoreTransaction;

declare module 'knex/types/tables' {
  interface Tables {
    user_store_transaction: Knex.CompositeTableType<TUserStoreTransaction, TUserStoreTransaction$InsertData>;
  }
}
