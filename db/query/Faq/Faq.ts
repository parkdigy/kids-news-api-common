/********************************************************************************************************************
 * FAQ Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TFaq$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'faq';
type tableName = typeof tableName;

export default class Faq extends MySqlQuery<tableName> {
  Status = TFaq$Status;

  constructor() {
    super(tableName);
  }
}

export { Faq };
