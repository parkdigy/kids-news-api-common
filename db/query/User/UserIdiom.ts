import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_idiom';
type tableName = typeof tableName;

export default class UserIdiom extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserIdiom };
