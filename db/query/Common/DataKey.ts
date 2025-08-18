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
      return info.data_key.toString();
    } else {
      return '0';
    }
  }

  /********************************************************************************************************************
   * 데이터 KEY 증가
   * ******************************************************************************************************************/
  async increaseDataKey(req: MyRequest, id: TDataKey$Id) {
    const info = await this.find(req, { id }).select('data_key');
    if (info) {
      const newDataKey = info.data_key + 1;
      await this.editWithUpdateDate(req, { data_key: newDataKey }, { id });
      return newDataKey;
    } else {
      await this.addWithCreateUpdateDate(req, { id, data_key: 1 });
      return 1;
    }
  }
}

export { DataKey };
