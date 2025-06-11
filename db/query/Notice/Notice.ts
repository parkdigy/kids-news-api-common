/********************************************************************************************************************
 * 공지사항 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TNotice$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'notice';
type tableName = typeof tableName;

export default class Notice extends MySqlQuery<tableName> {
  Status = TNotice$Status;

  constructor() {
    super(tableName);
  }
}

export { Notice };
