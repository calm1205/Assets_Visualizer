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

| カラム名        | 定義                  | 説明              | 備考             |
| --------------- | --------------------- | ----------------- | ---------------- |
| id              | uuid(pk)              | 主キー            |
| user_id         | uuid(fk)              | ユーザ id         |
| name            | varchar(255)          | 支払いタイトル    |
| price           | integer               | 支払い金額        |
| payment_date    | datetime              | 支払い日時        |
| payment_type_id | varchar(255)          | 支払いジャンル id | 浪費、消費、投資 |
| score           | integer,max:100,min:1 | 満足度            | 100              |
| created_at      | date                  | 作成日            | システムカラム   |
| updated_at      | date                  | 更新日            | システムカラム   |

## fix_costs

固定費テーブル

| カラム名        | 定義         | 説明              | 備考             |
| --------------- | ------------ | ----------------- | ---------------- |
| id              | uuid(pk)     | 主キー            |
| user_id         | uuid(fk)     | ユーザ id         |
| name            | varchar(255) | 支払いタイトル    |
| price           | integer      | 支払い金額        |
| cycle_id        | varchar(255) | 支払い周期        | 週、月、年       |
| payment_type_id | varchar(255) | 支払いジャンル id | 浪費、消費、投資 |
| created_at      | date         | 作成日            | システムカラム   |
| updated_at      | date         | 更新日            | システムカラム   |

## investment

投資テーブル、（貯金も金利 0%で投資として扱う）

| カラム名        | 定義                             | 説明           | 備考           |
| --------------- | -------------------------------- | -------------- | -------------- |
| id              | uuid(pk)                         | 主キー         |
| user_id         | uuid(fk)                         | ユーザ id      |
| name            | varchar(255)                     | 支払いタイトル |
| price           | integer                          | 支払い金額     |
| annual_interest | float(255),max: 100.0,default: 0 | 年利           | %              |
| created_at      | date                             | 作成日         | システムカラム |
| updated_at      | date                             | 更新日         | システムカラム |

# enum

## payment_type_enum

| key        | 説明 |
| ---------- | ---- |
| expenses   | 消費 |
| waste      | 浪費 |
| investment | 投資 |

## payment_cycle_enum

| key     | 説明 |
| ------- | ---- |
| weekly  | 週   |
| monthly | 月   |
| year    | 年   |
