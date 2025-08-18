/********************************************************************************************************************
 * 회원 로그인 SNS 정보 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TUserLoginSns$Type } from '@kac_db_models';

const tableName: Knex.TableNames = 'user_login_sns';
type tableName = typeof tableName;

export default class UserLoginSns extends MySqlQuery<tableName> {
  Type = TUserLoginSns$Type;

  constructor() {
    super(tableName);
  }
}

export { UserLoginSns };
