import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'idiom';
type tableName = typeof tableName;

export default class Idiom extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { Idiom };
