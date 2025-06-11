/********************************************************************************************************************
 * 회원 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TUser$RegType, TUser$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'user';
type tableName = typeof tableName;

export default class User extends MySqlQuery<tableName> {
  Status = TUser$Status;
  RegType = TUser$RegType;

  constructor() {
    super(tableName);
  }
}

export { User };
