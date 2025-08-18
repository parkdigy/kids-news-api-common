/********************************************************************************************************************
 * 문의 카테고리 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TQnaCategory$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'qna_category';
type tableName = typeof tableName;

export default class QnaCategory extends MySqlQuery<tableName> {
  Status = TQnaCategory$Status;

  constructor() {
    super(tableName);
  }
}

export { QnaCategory };
