/********************************************************************************************************************
 * FCM 토큰 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TFcmToken$Os } from '@kac_db_models';

const tableName: Knex.TableNames = 'fcm_token';
type tableName = typeof tableName;

export default class FcmToken extends MySqlQuery<tableName> {
  Os = TFcmToken$Os;

  constructor() {
    super(tableName);
  }
}

export { FcmToken };
