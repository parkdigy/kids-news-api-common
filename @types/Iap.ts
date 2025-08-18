/********************************************************************************************************************
 * 일회성 상품 ID
 * ******************************************************************************************************************/

export const IapOneTimeProductIdIos = {
  Forever: 'premium_forever',
} as const;
export type IapOneTimeProductIdIos = ValueOf<typeof IapOneTimeProductIdIos>;
export const IapOneTimeProductIdIosValues = Object.values(IapOneTimeProductIdIos);

export const IapOneTimeProductIdAndroid = {
  Forever: 'premium_forever',
} as const;
export type IapOneTimeProductIdAndroid = ValueOf<typeof IapOneTimeProductIdAndroid>;
export const IapOneTimeProductIdAndroidValues = Object.values(IapOneTimeProductIdAndroid);

export type IapOneTimeProductId = IapOneTimeProductIdIos | IapOneTimeProductIdAndroid;

/********************************************************************************************************************
 * 구독 상품 ID
 * ******************************************************************************************************************/

export const IapSubscriptionProductIdIos = {
  Monthly: 'premium_monthly',
  Yearly: 'premium_yearly',
} as const;
export type IapSubscriptionProductIdIos = ValueOf<typeof IapSubscriptionProductIdIos>;
export const IapSubscriptionProductIdIosValues = Object.values(IapSubscriptionProductIdIos);

export const IapSubscriptionProductIdAndroid = {
  Premium: 'premium',
} as const;
export type IapSubscriptionProductIdAndroid = ValueOf<typeof IapSubscriptionProductIdAndroid>;
export const IapSubscriptionProductIdAndroidValues = Object.values(IapSubscriptionProductIdAndroid);

export type IapSubscriptionProductId = IapSubscriptionProductIdIos | IapSubscriptionProductIdAndroid;

/********************************************************************************************************************
 * 상품 ID
 * ******************************************************************************************************************/

export type IapProductIdIos = IapOneTimeProductIdIos | IapSubscriptionProductIdIos;
export type IapProductIdAndroid = IapOneTimeProductIdAndroid | IapSubscriptionProductIdAndroid;
export type IapProductId = IapProductIdIos | IapProductIdAndroid;

/********************************************************************************************************************
 * 안드로이드 구독 Plan ID
 * ******************************************************************************************************************/

export const IapSubscriptionPlanIdAndroid = {
  Monthly: 'premium-monthly',
  Yearly: 'premium-yearly',
} as const;
export type IapSubscriptionPlanIdAndroid = ValueOf<typeof IapSubscriptionPlanIdAndroid>;
