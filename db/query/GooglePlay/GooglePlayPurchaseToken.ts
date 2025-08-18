import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'google_play_purchase_token';
type tableName = typeof tableName;

export default class GooglePlayPurchaseToken extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { GooglePlayPurchaseToken };
