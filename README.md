# GeneratedSampleRepo

FlowSmith 自動実行の疎通確認用サンプルリポジトリです。

## Usage

### セットアップ

```bash
git clone https://github.com/MasaakiAYB/GeneratedSampleRepo.git
cd GeneratedSampleRepo
git checkout agent/issue-1-readme-usage
```

### 実行方法

このリポジトリは README 更新のサンプルのため、以下のコマンドで内容確認を行います。

```bash
ls -la
cat README.md
```

### トラブルシュート

`README.md` が存在しない、またはブランチが異なる場合は、次を実行して状態を確認してください。

```bash
test -f README.md && echo "README exists" || echo "README missing"
git branch --show-current
git status -sb
```
