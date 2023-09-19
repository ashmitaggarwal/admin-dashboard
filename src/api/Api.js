export default {
  WebUrl: 'gyftr.com',
  BaseUrl: 'http://localhost:7659/api',

  CheckMobile: '/user/checkMobile',
  LoginUser: '/user/login',
  SSOLoginUser: '/ssologin',
  RegisterUser: '/user/registration',
  ResetPassword: '/user/resendOtp',
  ForgetPin: '/forgotpin',
  UpdateProfile: '/updateProfile/',
  GetProfile: '/user/detail',
  GetCards: '/global/cards',

  BrandDetail: '/brand/',
  GetCartItemsUrl: '/cart/getall',
  DeleteCartItemUrl: '/cart/remove',
  RemoveBuyNOw: 'cart/removebuynow',
  AddToCartUrl: '/cart/add',
  UpdateDeliveryDetail: '/cart/updateDeliveryDetail',
  CreateOrderUrl: '/order/createorder',
  ChangeQuantityUrl: '/cart/update/',
  TopNavListUrl: '/home/navigation',
  HomeContent: '/home/content',
  FetchParticularOrderUrl: '/cart/getorder',

  //Get Brands By Category
  BrandsByCategory: '/category/content',
  OffersByCategory: '/categories/offers/',
  TrendingByCategory: '/categories/trending/',
  BrandSearch: '/home/brandsearch',
  AllTransactions: '/order/allorders',
  UpdateCartItem: '/updateCartItem/',
  CreateTicket: '/create/ticket',
  GetBrandListandPurpose: '/home/ticketbrands',
  GetPurposeDetail: '/home/ticketpurposedetail',

  //Get Brand Info
  LocateStoreUrl: '/home/storelocator',
  PointRange: '/home/pointrange',
  PullCoupon: 'indusInd/claimvoucher',
  GetSubCategory: '/subcategory',

  //Resend Voucher
  ResendVoucherUrl: '/resend/voucher',

  // Globar Urls
  SendGyftrPayVoucher: '/valentine/sendgift',
  GyftrPayVoucherStatus: '/valentine/vstatus',
  FetchVoucherDetailsUrl: '/vouchers/detail',
  RecentlyViewdBrandsUrl: '/ViewedItems',
  BrandSearchUrl: '/brands/search',
  PromotionsUrl: '/promotions',
  BrandsPromotionUrl: '/brands/promotion',

  // Home Page Url
  HomePageBrandsUrl: '/brands/bestoffers',
  HomePageSliderImagesUrl: '/banner-masters/home',
  HomePageStaticContentUrl: '/static-contents/home',

  // Authentication
  LoginUserUrl: '/users/login',
  FetchUserProfileUrl: '/users/profile',
  RegisterUserUrl: '/users/register',
  ForgotPasswordUrl: '/users/getloginpin',
  VerifyOtpUrl: '/users/verifyotp',
  ResetPasswordUrl: '/users/resetpassword',
  LogOutUserUrl: '/users/logout',
  CheckRegistedMobileUrl: '/users/checkmobile',
  VerifyUserUrl: '/users/verifyaccount',
  ResendOtpUrl: '/users/resendotp',

  // Cart Page
  GetSaveLaterItemsUrl: '/cartItems?type=saved',
  AutoSaveLaterCartUrl: '/cartItems/autosavelater',
  MoveToSaveLaterUrl: '/cartItems/moveitems/savelater',
  MoveToCartUrl: '/cartItems/moveitems/cart',
  ReviewTempCartUrl: '/cartItems/reviewcart',
  SaveLaterCartUrl: '/cartItems/savelater',
  RepriceCartUrl: '/cartItems/repriceitems',
  DirectCheckoutUrl: '/orders/directcheckout',
  ChangeAddressUrl: '/carts/changeaddress',
  UpdateDeliveryAddressUrl: '/carts/updateaddress',

  // Brand Page
  GetBrandDetailsUrl: '/brands/detail',
  GetBrandProductsUrl: '/brands/products',
  SendStoreDetailsUrl: '/brand-stores/sendsmsemail',
  SendBrandDetailUrl: '/brands/smsbrand',

  // Brand List Page
  GetBrandsList: '/brands/list',
  GetPromocodes: '/getpromocodes',

  // Category Page
  GetCategoryBrandsUrl: '/categories/brands',
  AllBrands: '/home/allbrands',
}
