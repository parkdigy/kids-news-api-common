/********************************************************************************************************************
 * 단어 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'news_word';
type tableName = typeof tableName;

export default class NewsWord extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { NewsWord };
