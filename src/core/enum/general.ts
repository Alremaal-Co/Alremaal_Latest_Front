export enum Languages {
  ENGLISH = "en",
  ARABIC = "ar",
  LANGUAGE = "LANGUAGE",
}

export enum Directions {
  RTL = "rtl",
  LTR = "ltr",
}

export enum mode {
  Light="light",
  Dark="dark",
  System="system"
}
export enum skin {
  Shadow="shadow",
  Border="border",
  Default="default"
}
export enum layoutLocal {
  Vertical="vertical",
  Compress="compress",
  Horizontal="horizontal"
}
export enum svc {
  svc1="_svc"
}
export enum v {
  v1="v1"
}
export enum Pages {
  LOGIN = "signin",
  Register = "signup",
  FORGOT_PASSWORD = "forgot-password",
  CATEGORIES = "categories",
  MENU_ITEMS = "menu-items",
  USERS = "users",
  ORDERS = "orders",
  NEW = "new",
  EDIT = "edit",
}

export enum ToastType{
  SUCCESS="success",
  ERROR="error",
  WARNING="warning",
  INFO="info"
}

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  DATE = "date",
  TIME = "time",
  DATE_TIME_LOCAL = "datetime-local",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SELECT = "select",
  TEXTAREA = "textarea",
  FILE = "file",
  IMAGE = "image",
  COLOR = "color",
  RANGE = "range",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
  MONTH = "month",
  WEEK = "week",
  HIDDEN = "hidden",
  MULTI_SELECT = "multi select",
  
}

export const optionsInputTypes = Object.values(InputTypes).map((value) => ({ value, labelAr: value, labelEn: value }));


export enum Navigate {
  NEXT = "next",
  PREV = "prev",
}
export enum Responses {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum SortBy {
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  STATUS = "status",
  START_DATE = "startDate",
  END_DATE = "endDate",
  TITLE = "title",
  DESCRIPTION = "description",
  PRICE = "price",
  DISCOUNT = "discount",
  RATING = "rating",
  VIEWS = "views",
  CLICKS = "clicks",
  ORDERS = "orders",
  REVIEWS = "reviews",
}

export enum AuthMessages {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  FORGET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS",
  RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS",
  LOGIN_ERROR = "EMAIL_OR_PASSWORD_IS_INCORRECT",
  REGISTER_ERROR = "EMAIL_ALREADY_EXISTS",
  FORGET_PASSWORD_ERROR = "EMAIL_NOT_FOUND",
  RESET_PASSWORD_ERROR = "INVALID_OR_EXPIRED_RESET_PASSWORD_LINK",
}

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum Environments {
  PROD = "production",
  DEV = "development",
}



export enum UserRole {
  USER = "USER",                                        // مستخدم: الشخص الذي يستخدم النظام بشكل عام
  ADMIN = "ADMIN",                                      // مدير: الشخص المسؤول عن إدارة النظام
  SUPERVISOR = "SUPERVISOR",                            // مشرف: الشخص الذي يشرف على العمليات
  BANK_EMPLOYEE = "BANK_EMPLOYEE",                      // موظف البنك: الشخص الذي يعمل في بنك
  REAL_ESTATE_DEVELOPER = "REAL_ESTATE_DEVELOPER",      // مطور عقاري: الشخص الذي يعمل في تطوير العقارات
  MIDDLEMAN = "MIDDLEMAN",                              // وسيط: الشخص الذي يتوسط بين المشتري والبائع
  PROPERTY_SEARCHER = "PROPERTY_SEARCHER",              // باحث عن عقار: الشخص الذي يبحث عن عقار للشراء أو الاستئجار
  FINANCING_SEARCHER = "FINANCING_SEARCHER",            // باحث عن تمويل: الشخص الذي يبحث عن خيارات تمويل
}


export enum Endpoints {
  LIST = "list",
  FIND_BY_ID = "find/",
}


export enum TYPE_MARKERS {
 REGION = "region",
 DISTRICT = "district",
 CITY = "city",
 OFFER = "offer",
 ORDER = "order",
 PROJECT = "project",
 USER = "user",
 AGENT = "agent",
 DEVELOPER = "developer",
 
}
export enum ActionPath{
  CREATE ="create",
  DETAILS="details",
  EDIT="edit",
  Add="add"
}