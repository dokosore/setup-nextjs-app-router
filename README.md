# ドコソレ流 Next.js AppRouter Settings

## 手順

### create-next-app

```bash
npx create-next-app@latest --ts --use-npm {アプリの名前}
```

```
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias? … Yes
✔ What import alias would you like configured? … @/*
```

## Volta の環境を合わせる

- `volta pin node@18`
- `volta pin npm@8`

### インストール

```bash
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import prettier eslint-config-prettier
```

## ファイルのコピー

以下のファイルを全てこのプロジェクトからコピーして、移す

- tsconfig.json
- .eslintrc.json
- .eslintignore
- .prettierrc.json
- .vscode/settings.json
- .vscode/extensions.json

## ディレクトリ構成

- 斉藤が考案中...
