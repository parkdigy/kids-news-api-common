import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'news_tts';
type tableName = typeof tableName;

export default class NewsTts extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { NewsTts };
