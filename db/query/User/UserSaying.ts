import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_saying';
type tableName = typeof tableName;

export default class UserSaying extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserSaying };
