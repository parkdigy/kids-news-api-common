import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_end_free_trial';
type tableName = typeof tableName;

export default class UserEndFreeTrial extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserEndFreeTrial };
