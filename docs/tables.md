# テーブル設計

## users

ユーザテーブル

| カラム名   | 定義         | 説明           | 備考           |
| ---------- | ------------ | -------------- | -------------- |
| id         | uuid(pk)     | 主キー         |
| email      | varchar(255) | メールアドレス |                |
| password   | varchar(255) | パスワード     |
| created_at | date         | 作成日         | システムカラム |
| updated_at | date         | 更新日         | システムカラム |

## payments

支払いテーブル

| カラム名     | 定義                  | 説明              | 備考                       |
| ------------ | --------------------- | ----------------- | -------------------------- |
| id           | uuid(pk)              | 主キー            |
| user_id      | uuid(fk)              | ユーザ id         |
| name         | varchar(255)          | 支払いタイトル    |
| price        | integer               | 支払い金額        |
| payment_date | datetime              | 支払い日時        |
| payment_type | varchar(255)          | 支払いジャンル id | 浪費、消費、投資、自己投資 |
| score        | integer,max:100,min:1 | 満足度            | 100                        |
| created_at   | date                  | 作成日            | システムカラム             |
| updated_at   | date                  | 更新日            | システムカラム             |

## periodec_payments

定期支払テーブル

| カラム名        | 定義                             | 説明              | 備考                       |
| --------------- | -------------------------------- | ----------------- | -------------------------- |
| id              | uuid(pk)                         | 主キー            |
| user_id         | uuid(fk)                         | ユーザ id         |
| name            | varchar(255)                     | 支払いタイトル    |
| price           | integer                          | 支払い金額        |
| payment_period  | varchar(255)                     | 支払い周期        | 日、週、月、年             |
| payment_type    | varchar(255)                     | 支払いジャンル id | 浪費、消費、投資、自己投資 |
| annual_interest | float(255),max: 100.0,default: 0 | 年利              | %                          |
| created_at      | date                             | 作成日            | システムカラム             |
| updated_at      | date                             | 更新日            | システムカラム             |

# enum

## payment_type_enum

| key             | 説明     |
| --------------- | -------- |
| expenses        | 消費     |
| waste           | 浪費     |
| investment      | 投資     |
| self_investment | 自己投資 |

## payment_period_enum

| key     | 説明 |
| ------- | ---- |
| daily   | 日   |
| weekly  | 週   |
| monthly | 月   |
| year    | 年   |
