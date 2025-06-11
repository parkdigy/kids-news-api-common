import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { uuid } from '@pdg/util';
import { TNewsLevel$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'news_level';
type tableName = typeof tableName;

export default class NewsLevel extends MySqlQuery<tableName> {
  Status = TNewsLevel$Status;

  constructor() {
    super(tableName);
  }

  async newKey(req: MyRequest) {
    let key = uuid(true);
    while (await this.exists(req, { news_level_key: key })) {
      key = uuid(true);
    }
    return key;
  }
}

export { NewsLevel };
