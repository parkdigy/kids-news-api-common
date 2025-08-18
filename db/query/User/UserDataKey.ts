import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TUser, TUserDataKey, TUserDataKey$Id } from '@kac_db_models';

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
  async getDataKey(
    req: MyRequest,
    userId: TUserDataKey['user_id'],
    level: TUser['level'],
    dataId: TUserDataKey['data_id']
  ) {
    const info = await this.find(req, { user_id: userId, data_id: dataId }).select('data_key');
    if (info) {
      return `${userId}_${info.data_key}_${level}`;
    } else {
      return `${userId}_${level}`;
    }
  }

  /********************************************************************************************************************
   * 데이터 KEY 목록 조회
   * ******************************************************************************************************************/
  async getDataKeyList(
    req: MyRequest,
    userId: TUserDataKey['user_id'],
    level: TUser['level'],
    dataIds?: TUserDataKey['data_id'][]
  ) {
    const finalDataIds = dataIds || this.Id.getList();

    const list = await this.getBuilder(req)
      .select('data_id', 'data_key')
      .where('user_id', userId)
      .whereIn('data_id', finalDataIds);

    const map = list.reduce((acc, item) => {
      acc[item.data_id] = item.data_key.toString();
      return acc;
    }, {} as Dict<string>);

    for (const dataId of finalDataIds) {
      if (map[dataId] !== undefined) {
        map[dataId] = `${userId}_${map[dataId]}_${level}`;
      } else {
        map[dataId] = `${userId}_${level}`;
      }
    }

    return map;
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
