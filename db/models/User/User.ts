/********************************************************************************************************************
 * 회원 테이블
 * ******************************************************************************************************************/

import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';
import { Level } from '@kc_types';

/** 상태 */
const Status = { ON: '사용', RESIGN: '탈퇴' };
export type TUser$Status = keyof typeof Status;
export const TUser$Status = makeEnum('status', Status);

/** 가입 OS */
const RegOs = { ios: 'iOS', aos: 'Android' };
export type TUser$RegOs = keyof typeof RegOs;
export const TUser$RegOs = makeEnum('reg_os', RegOs);

/** 가입 구분 */
const RegType = { GUEST: '비회원', KAKAO: '카카오', NAVER: '네이버', GOOGLE: '구글', APPLE: '애플' };
export type TUser$RegType = keyof typeof RegType;
export const TUser$RegType = makeEnum('reg_type', RegType);

/** 가입 OS */
const UserType = { U: '회원', OP: '운영자' };
export type TUser$UserType = keyof typeof UserType;
export const TUser$UserType = makeEnum('user_type', UserType, { U: 'User', OP: 'Operator' });

/** 프리미엄 구입 스토어 */
const PremiumPurchaseStore = { A: '앱스토어', G: '구글플레이', F: '무료제공' };
export type TUser$PremiumPurchaseStore = keyof typeof PremiumPurchaseStore;
export const TUser$PremiumPurchaseStore = makeEnum('premium_purchase_store', PremiumPurchaseStore, {
  A: 'AppStore',
  G: 'GooglePlay',
  F: 'Free',
});

export interface TUser {
  /** Primary Key */
  id: number; // ID // AI, int
  /** Others */
  user_key: string; // 회원 KEY (UUID(하이픈제거) 형식) // UQ, max:200
  uuid: string; // UUID // UQ, max:36
  sns_user_id: string; // SNS 회원 ID // max:200
  name: string | null; // 이름 // max:100
  nickname: string; // 이름 // max:20
  email: string | null; // 이메일 // max:100
  is_push_notification: boolean; // 푸시알림 받기 여부 // default:1
  login_date: Date | null; // 로그인 일자
  reg_os: TUser$RegOs; // 가입 OS
  reg_type: TUser$RegType; // 가입 구분
  reg_app_key: string; // 가입 APP KEY // max:32
  reg_install_app_key: string; // 가입 설치 APP KEY // max:32
  resign_date: Date | null; // 탈퇴 일자
  level: Level; // 뉴스 레벨 // tinyint, default:1
  is_first_settings_done: boolean; // 최초 설정 완료 여부 // boolean // default:0
  is_end_free_trial: boolean; // 무료체험 종료 여부 // boolean // default:0
  is_premium: boolean; // 프리미엄 여부 // boolean // default:0
  premium_purchase_store: TUser$PremiumPurchaseStore | null; // 프리미엄 구입 스토어
  premium_transaction_id: number | null; // 프리미엄 구입 트랜잭션 ID // int
  data_key: number; // 데이터 KEY // default:0
  last_data_app_key: string | null; // 마지막 데이터 수정 APP KEY // max:32
  user_type: TUser$UserType; // 회원 구분 // default:U
  status: TUser$Status; // 상태
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUser$InsertData = TableInsertData<
  TUser,
  'id',
  | 'email'
  | 'name'
  | 'is_push_notification'
  | 'resign_date'
  | 'level'
  | 'is_first_settings_done'
  | 'is_end_free_trial'
  | 'is_premium'
  | 'premium_purchase_store'
  | 'premium_transaction_id'
  | 'data_key'
  | 'last_data_app_key'
  | 'user_type'
>;
export type TUser$UpdateData = TableUpdateData<TUser, 'id' | 'uuid' | 'create_date', 'update_date'>;

export default TUser;

declare module 'knex/types/tables' {
  interface Tables {
    user: Knex.CompositeTableType<TUser, TUser$InsertData, TUser$UpdateData>;
  }
}
