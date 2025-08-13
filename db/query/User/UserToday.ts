import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_today';
type tableName = typeof tableName;

export default class UserToday extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserToday };
