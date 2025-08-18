/********************************************************************************************************************
 * 회원 프리미엄 결제 내역 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TUserStoreTransaction$ProductType, TUserStoreTransaction$Store } from '@kac_db_models';

const tableName: Knex.TableNames = 'user_store_transaction';
type tableName = typeof tableName;

export default class UserStoreTransaction extends MySqlQuery<tableName> {
  Store = TUserStoreTransaction$Store;
  ProductType = TUserStoreTransaction$ProductType;

  constructor() {
    super(tableName);
  }
}

export { UserStoreTransaction };
