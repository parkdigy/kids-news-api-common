/********************************************************************************************************************
 * 아바타 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import {
  TAppStoreTransaction$AutoRenewStatus,
  TAppStoreTransaction$ExpirationIntent,
  TAppStoreTransaction$NotificationType,
  TAppStoreTransaction$ProductType,
  TAppStoreTransaction$Status,
  TAppStoreTransaction$TransactionReason,
} from '@kac_db_models';

const tableName: Knex.TableNames = 'app_store_transaction';
type tableName = typeof tableName;

export default class AppStoreTransaction extends MySqlQuery<tableName> {
  Status = TAppStoreTransaction$Status;
  ProductType = TAppStoreTransaction$ProductType;
  NotificationType = TAppStoreTransaction$NotificationType;
  TransactionReason = TAppStoreTransaction$TransactionReason;
  AutoRenewStatus = TAppStoreTransaction$AutoRenewStatus;
  ExpirationIntent = TAppStoreTransaction$ExpirationIntent;

  constructor() {
    super(tableName);
  }
}

export { AppStoreTransaction };
