import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'ch_char';
type tableName = typeof tableName;

export default class ChChar extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { ChChar };
