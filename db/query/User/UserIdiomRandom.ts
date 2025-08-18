import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_idiom_random';
type tableName = typeof tableName;

export default class UserIdiomRandom extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserIdiomRandom };
