type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

namespace defs {
  export class FollowIndexDTO {
    /** 指数代码 */
    indexCode?: string;

    /** 微信openId */
    openId?: string;

    /** 类型（0：取消关注 1：关注） */
    type?: number;
  }

  export class HomePageResultVO {
    /** 头图 */
    headImgList?: Array<defs.HeadimgObject>;

    /** 留言板块 */
    msgBannerList?: Array<defs.MSGBANNERObject>;
  }

  export class IndexInfoVO {
    /** 创建时间 */
    createdTime?: string;

    /** 用户是否已关注 */
    followFlag?: boolean;

    /** 主键 */
    id?: number;

    /** 指数代码 */
    indexCode?: string;

    /** 指数名称 */
    indexName?: string;

    /** 指数表现 */
    indexPerformance?: defs.IndexperFormanceObject;

    /** 关联产品链接 */
    link?: string;

    /** 排序(中台新增时不用传) */
    sort?: number;

    /** 类型（进攻区：ATTACK 防守区：DEFENCE） */
    type?: string;

    /** 修改时间 */
    updatedTime?: string;
  }

  export class OpenIdDTO {
    /** 微信openId */
    openId?: string;
  }

  export class QueryIndexDTO {
    /** 搜索关键字 */
    keyword?: string;

    /** 微信openId */
    openId?: string;

    /** 类型（进攻区：ATTACK 防守区：DEFENCE） */
    type?: string;
  }

  export class ResponseVO<T0 = any> {
    /** body */
    body: T0;

    /** 状态码, 正确时返回 e0000, 其他非 e0000则是错误的 */
    errCode?: string;

    /** 信息, 若有错误则是具体的错误信息 */
    errMessage?: string;
  }

  export class TimeVO {
    /** 当前时间 */
    nowTime?: string;

    /** 当前交易日 */
    t?: number;

    /** tend */
    tend?: number;

    /** t+1 */
    tplus1?: number;

    /** t+2 */
    tplus2?: number;

    /** t+3 */
    tplus3?: number;
  }

  export class TyjPropertyVO {
    /** 红包金额 */
    awardPrice?: number;

    /** 确认份额时间 */
    confirmDate?: string;

    /** 持有时间 */
    containDay?: number;

    /** 文案 */
    content?: string;

    /** 体验时间 */
    couponDay?: number;

    /** 卡券id */
    couponId?: number;

    /** 体验金 */
    couponWorth?: number;

    /** createdTime */
    createdTime?: string;

    /** 当前收益时间 */
    currentIncomeDate?: string;

    /** 过期时间 */
    expireTime?: string;

    /** 头像 */
    headImgUrl?: string;

    /** 累计收益 */
    income?: number;

    /** 累计收益率（百分制） */
    incomeRatioTotal?: number;

    /** 涨跌记录 */
    incomes?: Array<defs.TyjincomeObject>;

    /** 指数代码 */
    indexCode?: string;

    /** 指数名称 */
    indexName?: string;

    /** 指数初始市值 */
    indexProperty?: number;

    /** 确认份额 */
    indexShare?: number;

    /** 标签 */
    label?: string;

    /** 体验最后一天的日期 */
    lastIncomeDate?: string;

    /** 昵称 */
    nickName?: string;

    /** 微信openId */
    openId?: string;

    /** 期数ID */
    phaseId?: number;

    /** propertyId */
    propertyId?: number;

    /** pstatus */
    pstatus?: string;

    /** 发放红包金额 */
    sendAward?: number;

    /** updatedTime */
    updatedTime?: string;

    /** 昨日收益 */
    yesterdayIncome?: number;

    /** 昨日涨跌幅（百分制） */
    yesterdayIncomeRatio?: number;
  }

  export class UseCouponDTO {
    /** 卡券id */
    couponId?: number;

    /** 使用体验金的指数代码 */
    indexCode?: string;

    /** 微信openId */
    openId?: string;
  }

  export class UserTyjDTO {
    /** 微信openId */
    openId?: string;

    /** 类型: 1-待体验 2-体验中 3-体验结束 */
    type?: number;
  }

  export class WechatIndexDTO {
    /** code */
    code?: string;

    /** 用户 openId */
    openId?: string;
  }

  export class WechatIndexVO {
    /** 是否新用户 */
    isNew?: boolean;

    /** sessionKey   为 00 时此时不是走微信授权， */
    sessionKey?: string;

    /** 用户实体类 */
    wechatUser?: defs.WeChatuserObject;
  }
}
