あなたは Coder エージェントです。

リポジトリ: /home/runner/work/FlowSmith/FlowSmith/.agent/workspaces/masaakiayb-generatedsamplerepo
プロジェクト: 
対象リポジトリ: MasaakiAYB/GeneratedSampleRepo
ブランチ: agent/issue-3-agent-api-rerun-20260217081902
試行: 1/3

Issue:
- 番号: #3
- タイトル: [agent] 簡単なAPIエンドポイントを追加する
- URL: https://github.com/MasaakiAYB/GeneratedSampleRepo/issues/3

Issue 本文:
## 概要
最小構成で利用できる API エンドポイントを1つ追加してください。

## 実装要件
- `GET /api/health` を追加する
- レスポンスは `200 OK` で JSON を返す
- レスポンス例: `{"status":"ok"}`
- 不要な依存追加は避ける

## 受け入れ条件
- ローカル実行で `GET /api/health` が成功する
- README に起動手順と確認コマンドを追記する
- 可能なら最小限のテストを追加する

## 検証コマンド例
```bash
curl -i http://localhost:8000/api/health
```

## 補足
- 既存のプロジェクト構成・コーディング規約に合わせて実装してください。

計画:
## 1. スコープ（対象/対象外）

### 対象
- `GET /api/health` を返す最小 API の追加
- `200 OK` + `application/json` + `{"status":"ok"}` の実装
- ローカル起動手順と `curl` 確認コマンドを `README.md` に追記
- 可能な範囲で最小テスト追加（標準ライブラリベース）

### 対象外
- 認証、DB、設定管理、ロギング基盤などの機能拡張
- OpenAPI/Swagger 追加
- 不要な外部依存（フレームワーク導入）  
  - 現状リポジトリは実装コードが未配置に近いため、依存を増やさず `python` 標準ライブラリで完結させる前提

---

## 2. 実装手順（完了条件付き）

1. 現状構成の確認と実装方針確定  
完了条件: 既存コードがほぼ無いことを確認し、`app.py` + `tests/` + `README.md` を最小構成として採用

2. HTTP サーバー実装（`app.py`）  
完了条件: `GET /api/health` で `200` と `{"status":"ok"}` を JSON 返却できる  
- 推奨: `http.server`（`BaseHTTPRequestHandler`）で実装  
- `Content-Type: application/json` を明示  
- それ以外のパスは `404`（最小限）

3. 起動インターフェース整備  
完了条件: `python app.py` で `localhost:8000`（または明示ホスト/ポート）で起動できる  
- 任意引数 `--host`, `--port` を付与（運用しやすさ確保）

4. README 追記  
完了条件: 初見で再現可能な手順が `README.md` に記載されている  
- 起動コマンド  
- 確認コマンド（`curl -i http://localhost:8000/api/health`）  
- 期待レスポンス例（ステータス行 + JSON）

5. 最小テスト追加（`tests/test_app.py`）  
完了条件: 自動テストで `/api/health` 成功を検証できる  
- `unittest` で `200` とレスポンス JSON を確認  
- 余力があれば未知パス `404` も追加

6. ローカル検証と仕上げ  
完了条件: 手動確認とテストが通る状態で、実装内容と検証手順が一致

---

## 3. リスクと対策

- リスク: 既存アプリ基盤が無いため実装方式がぶれる  
対策: 依存追加禁止を優先し、標準ライブラリで閉じる（`http.server` + `unittest`）

- リスク: JSON/ヘッダー不整合（`Content-Type` やボディ形式）  
対策: `curl -i` でヘッダーとボディを明示確認、テストでも JSON 文字列を固定検証

- リスク: README と実装の乖離  
対策: 検証で実際に README 記載コマンドをそのまま実行して確認

---

## 4. 検証計画（実行コマンドと期待結果）

1. サーバー起動
```bash
python app.py
```
期待結果:
- エラーなく起動し、`8000` 番ポートで待受

2. ヘルスチェック確認
```bash
curl -i http://localhost:8000/api/health
```
期待結果:
- ステータス: `HTTP/1.0 200 OK` または `HTTP/1.1 200 OK`
- ヘッダー: `Content-Type: application/json`
- ボディ: `{"status":"ok"}`

3. （任意）未知パス確認
```bash
curl -i http://localhost:8000/api/unknown
```
期待結果:
- `404 Not Found`

4. テスト実行
```bash
python -m unittest discover -s tests -p "test_*.py"
```
期待結果:
- 追加したテストが全件 `OK` で終了

前回試行のフィードバック:
None

必須の品質ゲート:
- `git diff --check`

ルール:
- 変更は最小限にし、Issue のスコープに集中すること。
- テストが不足している場合は、可能な範囲で追加または更新すること。
- 無関係なファイルは変更しないこと。

編集後、`/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260217T081917Z-issue-3/coder_output_attempt_1.md` に実行ログと変更ファイル要約を短く記載してください。
