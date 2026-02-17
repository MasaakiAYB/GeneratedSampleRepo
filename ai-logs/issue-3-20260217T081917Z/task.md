# Issue #3: [agent] 簡単なAPIエンドポイントを追加する

Project: (default)
Target repo: MasaakiAYB/GeneratedSampleRepo
Target path: /home/runner/work/FlowSmith/FlowSmith/.agent/workspaces/masaakiayb-generatedsamplerepo
URL: https://github.com/MasaakiAYB/GeneratedSampleRepo/issues/3

## Body

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
