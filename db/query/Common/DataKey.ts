/********************************************************************************************************************
 * 데이터 KEY Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TDataKey$Id } from '@kac_db_models';

const tableName: Knex.TableNames = 'data_key';
type tableName = typeof tableName;

export default class DataKey extends MySqlQuery<tableName> {
  Id = TDataKey$Id;

  constructor() {
    super(tableName);
  }

  /********************************************************************************************************************
   * 데이터 KEY 조회
   * ******************************************************************************************************************/
  async getDataKey(req: MyRequest, id: TDataKey$Id) {
    const info = await this.find(req, { id }).select('data_key');
    if (info) {
      return info.data_key;
    } else {
      return 0;
    }
  }
}

export { DataKey };
