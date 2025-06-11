/********************************************************************************************************************
 * 설정 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TConfig$Id } from '@kac_db_models';

const tableName: Knex.TableNames = 'config';
type tableName = typeof tableName;

export default class Config extends MySqlQuery<tableName> {
  Id = TConfig$Id;

  constructor() {
    super(tableName);
  }
}

export { Config };
