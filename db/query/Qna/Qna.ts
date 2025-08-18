/********************************************************************************************************************
 * 문의 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TQna$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'qna';
type tableName = typeof tableName;

export default class Qna extends MySqlQuery<tableName> {
  Status = TQna$Status;

  constructor() {
    super(tableName);
  }
}

export { Qna };
