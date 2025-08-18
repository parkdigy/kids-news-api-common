import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TGooglePlayTransaction$ProductType, TGooglePlayTransaction$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'google_play_transaction';
type tableName = typeof tableName;

export default class GooglePlayTransaction extends MySqlQuery<tableName> {
  Status = TGooglePlayTransaction$Status;
  ProductType = TGooglePlayTransaction$ProductType;

  constructor() {
    super(tableName);
  }
}

export { GooglePlayTransaction };
