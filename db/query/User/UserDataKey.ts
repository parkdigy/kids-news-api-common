import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TDataKey$Id, TUserDataKey, TUserDataKey$Id } from '@kac_db_models';

const tableName: Knex.TableNames = 'user_data_key';
type tableName = typeof tableName;

export default class UserDataKey extends MySqlQuery<tableName> {
  Id = TUserDataKey$Id;

  constructor() {
    super(tableName);
  }

  /********************************************************************************************************************
   * 데이터 KEY 조회
   * ******************************************************************************************************************/
  async getUserDataKey(req: MyRequest, userId: TUserDataKey['user_id'], dataId: TUserDataKey['data_id']) {
    const info = await this.find(req, { user_id: userId, data_id: dataId }).select('data_key');
    if (info) {
      return info.data_key;
    } else {
      return 0;
    }
  }

  /********************************************************************************************************************
   * 데이터 KEY 증가
   * ******************************************************************************************************************/
  async increaseDataKey(req: MyRequest, userId: TUserDataKey['user_id'], dataId: TUserDataKey['data_id']) {
    const info = await this.find(req, { user_id: userId, data_id: dataId }).select('data_key');
    if (info) {
      const newDataKey = info.data_key + 1;
      await this.editWithUpdateDate(req, { data_key: newDataKey }, { user_id: userId, data_id: dataId });
      return newDataKey;
    } else {
      await this.addWithCreateUpdateDate(req, { user_id: userId, data_id: dataId, data_key: 1 });
      return 1;
    }
  }
}

export { UserDataKey };
