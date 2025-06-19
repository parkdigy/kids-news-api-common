/********************************************************************************************************************
 * 단어 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'word';
type tableName = typeof tableName;

export default class Word extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { Word };
