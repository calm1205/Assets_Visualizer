# ユーザストーリー

## アクター

- 利用者（まだアカウントのないユーザ）
- ユーザ

## エピック

- 利用者はユーザ登録する
- ユーザは資産形成の計画を立てる。
- ユーザは日々の出費を記帳する。
- ユーザは日々の出費を確認する。

# ユースケース

- 利用者は、ユーザ登録をする。
  - なぜなら、アプリを利用したいから。（アプリはユーザ登録していないと活用できない）
- ユーザは、資産設計をする。
  - なぜなら、自分が今の生活でどれだけの資産を築けるのか分からないから。
- ユーザは、記帳する。
  - なぜなら、自分の支払いを記録したいから。
- ユーザは、過去の支払いを確認する。
  - なぜなら、自分の支払いの傾向や無駄を確認したいから。

## アクター

- 利用者
- ユーザ
- システム

## ユーザ登録

- 利用者は、アプリにアクセスする。
- システムは、未ログイン画面を表示する。
- 利用者は、未ログイン画面からサインアップボタンを押下する。
- システムは、サインアップ画面を表示する。
- 利用者は、メールアドレスとパスワードを入力し送信する。
- システムは、利用者をユーザとして登録する。

## 資産設計

- ユーザは、資産設計画面にアクサスする。
- システムは、資産設計画面を表示する。
- ユーザは、毎月の貯金額や投資額を設定する。
- システムは、10 年後までの資産をグラフ化して表示する。
  - この時に 1 ヶ月あたりの浪費かつ 90 点未満の支払いを上乗せしたグラフも表示する。

## 記帳

- ユーザは、記帳画面にアクセスする。
- システムは、記帳画面を表示する。
- ユーザは、支払いのタイトルを入力する。
- ユーザは、支払い金額を入力する。
- ユーザは、支払い日時を入力する。
- ユーザは、必須か否かを入力する。（浪費、消費、自己投資で区分けしても良い。）
- ユーザは、支払いの満足度を入力する。（必須ではない場合のみ）
  - 満足度の入力時に満足度の指標となる考え方のテキストを表示する。
  - その支払は計画されたものか？
  - その支払いは 1 年後の自分を幸せにするか？
  - その支払いで自分は上機嫌になれるか？
  - その支払いは入念に比較検討されたものか？
  - その支払いは価格を理由に選択していないか？（セールでなくても買ったか？）
- ユーザは、入力内容を確認する。
- ユーザは、入力を確定する。
- システムは、ユーザの入力内容を DB に保存する。

## 固定費設定

- ユーザは、固定費設定画面にアクセスする。
- システムは、固定費設定画面を表示する。
- ユーザは、毎月、毎年の固定費を設定する。
- システムは、各項目に対して、年間の総計、10 年後の総計を表示する。

## 支払い確認

- ユーザは、過去の支払い履歴画面にアクセスする。
- システムは、過去の支払いの必須、満足度から円グラフを表示する。
- システムは、過去の支払い履歴画面を表示する。
  - システムは、満足度が 90 点以下の支払いに色をつけて表示する。
- ユーザは、日毎、週毎、月毎、年毎で支払い表示を指定する。
- システムは、指定された期間を対象とした支払い履歴を表示する。
- ユーザは、金額、日時、満足度でソートが可能。
