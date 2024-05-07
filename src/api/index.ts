import { MyRequest, fullURL } from './request'

export const API = {
  /** 首页接口控制层 */
  home: {
    /**
 微信授权接口
微信授权接口
     */
    authorization: new MyRequest<
      defs.WechatIndexDTO,
      defs.ResponseVO<defs.WechatIndexVO>['body']
    >(fullURL('/home/authorization'), 'POST'),
    /** 用户关注指数 */
    followIndex: new MyRequest<
      defs.FollowIndexDTO,
      defs.ResponseVO<boolean>['body']
    >(fullURL('/home/index/follow'), 'POST'),
    /** 指数列表 */
    indexList: new MyRequest<
      defs.QueryIndexDTO,
      defs.ResponseVO<Array<defs.IndexInfoVO>>['body']
    >(fullURL('/home/index/list'), 'POST'),
    /** 首页 */
    page: new MyRequest<
      defs.OpenIdDTO,
      defs.ResponseVO<defs.HomePageResultVO>['body']
    >(fullURL('/home/page'), 'POST'),
  },
  /** 体验金相关业务控制层 */
  tyj: {
    /** 使用产品券 */
    useFundCoupon: new MyRequest<
      defs.UseCouponDTO,
      defs.ResponseVO<defs.TimeVO>['body']
    >(fullURL('/tyj/useFundCoupon'), 'POST'),
    /** 用户体验金记录 */
    userTyj: new MyRequest<
      defs.UserTyjDTO,
      defs.ResponseVO<Array<defs.TyjPropertyVO>>['body']
    >(fullURL('/tyj/userTyj'), 'POST'),
  },
}
