/********************************************************************************************************************
 * 회원 탈퇴 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TUserLogin$Os } from '@kac_db_models';

const tableName: Knex.TableNames = 'user_login';
type tableName = typeof tableName;

export default class UserLogin extends MySqlQuery<tableName> {
  Os = TUserLogin$Os;

  constructor() {
    super(tableName);
  }
}

export { UserLogin };
