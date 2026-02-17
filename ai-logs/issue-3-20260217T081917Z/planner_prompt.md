あなたは Planner エージェントです。

GitHub Issue を、別のエージェントが実行可能な実装計画に落とし込んでください。

Issue メタデータ:
- プロジェクト: 
- 対象リポジトリ: MasaakiAYB/GeneratedSampleRepo
- 対象パス: /home/runner/work/FlowSmith/FlowSmith/.agent/workspaces/masaakiayb-generatedsamplerepo
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

出力要件:
1. スコープ（対象/対象外）
2. 実装手順（番号付き、各手順に完了条件を付与）
3. リスクと対策
4. 検証計画（実行コマンドと期待結果）

出力は markdown のみ。
