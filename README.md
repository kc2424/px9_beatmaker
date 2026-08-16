# PX-9 — Official Portfolio Website

> **"8BIT IS NOT A LIMITATION. IT'S A CHOICE."**  
> チップチューン出身のビートメイカー「PX-9（ピクセルナイン）」のポートフォリオ Web アプリケーション。

---

## 概要

PX-9 は、矩形波・三角波・ノイズという限られたレトロ音源の制約から楽曲を組み立て、現代のミキシングと BPM で再構築する架空のビートメイカーです。

本サイトは、**「制約の中の選択」という 8-bit の音楽哲学を、Web サイトの視覚言語そのもので体現する**ことを目的に設計されています。懐古的なピクセル装飾に頼らず、装飾を徹底的に削ぎ落とした「静かなダークボイド」の美学を採用しています。

---

## 主な特徴・世界観

- **単色アクセント（Ember Rust `#cc6437`）の厳格な運用**:
  ヘアラインストローク・インジケータードット・小ラベル・フォーカスリングにのみ適用し、ベタ塗りを排除。
- **階調差による空間設計**:
  `#050505` (Abyss) → `#0b0b0b` (Void Black) → `#272a2a` (Charcoal Surface) → `#edebe7` (Bone) の階調差と 1px ヘアラインボーダーのみで面を表現（シャドウ・グロー完全不使用）。
- **角丸の二元管理**:
  コントロール・ボタン・バッジ・ナビゲーション＝ `1440px`（ピル型）、カード・コンテナ＝ `10px`、ニュースバー＝ `0px`。
- **タイポグラフィ 3 レジスター制**:
  - **Display / Headings / Brand**: `Alegreya`（格調高く文学的なセリフ体）
  - **Japanese Prose / Body**: `New Tegomin`（味わい深い手書き・墨筆風の日本語書体）
  - **System / Metadata**: `Roboto Mono`（等幅・ドット区切り）
- **GSAP による微細な動きの抑制**:
  過度なパララックスやグリッチを排し、リムライトの微細な呼吸パルスやカードの出現時フェードなど、静寂を壊さない最小限のマイクロアニメーションを実装。

---

## セクション構成

1. **Top News Bar**: Abyss 背景の全幅システムティッカー（最新アナウンス）
2. **Minimal Header**: `MENU`（ミニマルフルスクリーンナビ） ＆ `CONTACT` ゴーストピル
3. **Hero Section**: 影に沈むポートレート全面背景 ＋ ワードマーク ＋ 哲学ステートメント ＋ 琥珀色ヘアラインの微細パルス
4. **About (WHO IS PX-9)**: 世界観本文 ＋ 3 音源チャンネル（矩形波・三角波・ノイズ） ＋ 湾曲 CRT 走査線アンビエント
5. **Content Pillars**: 2:1:1 比率の非対称 3 カードグリッド
   - `01` 製作過程 (`HOW A TRACK IS BUILT`) — 8-bit トイハードウェア背景
   - `02` 音源解剖 (`INSIDE THE CHIP`) — CRT スキャンライン背景
   - `03` フリービート配布 (`FREE BEAT PACKS`) — カセットテープ背景
6. **Live Sound System**: 実機ゲーム機・ハードウェアサンプラーによるライブパフォーマンス紹介セクション
7. **Selected Work (Autonomous Archive)**: 唯一の高コントラスト Bone 反転ライトセクション（自主制作リリース 3 作品）
8. **Commissions & Contact**: アナログスタジオラック背景 ＋ `GET IN TOUCH` ダイレクトコミッション導線
9. **Footer**: コピーライト表記
10. **Mobile CTA Bar**: スマートフォン閲覧時の親指ゾーン固定バー（`md:hidden` / 48px+ タップ領域）

---

## 技術スタック

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (`Alegreya`, `New Tegomin`, `Roboto Mono`)

---

## 開発・ビルド手順

### 必要要件
- Node.js 18.18.0 以上
- npm

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

### 3. プロダクションビルド
```bash
npm run build
npm run start
```

---

## セキュリティ・アクセシビリティ仕様

- **セキュリティヘッダー**: `next.config.ts` にて `nosniff`, `DENY`, `strict-origin-when-cross-origin`, `Permissions-Policy` を設定済み。
- **アクセシビリティ**: 適切なセマンティック見出し階層（単一 `h1` → `h2` → `h3`）、全画像への意味的な `alt` 属性、キーボード操作時の琥珀色フォーカスリング（`:focus-visible`）。
- **コントラスト比**: Void Black 上の Pure White は 19.7:1（WCAG AAA 基準を大幅にクリア）。

---

## License & Copyright

© PX-9. All rights reserved.
