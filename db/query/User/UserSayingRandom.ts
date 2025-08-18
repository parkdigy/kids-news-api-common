import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_saying_random';
type tableName = typeof tableName;

export default class UserSayingRandom extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserSayingRandom };
