# 橘子時鐘

園遊會攤位用的 iPad 橫向時鐘：大字時間、提醒，左右滑動切換價目告示。

## 安裝到 iPad（可離線）

1. 在 iPad 的 Safari 打開 GitHub Pages 網址：`https://fr80770055re-tech.github.io/ClaudeTest/clock/`
2. 點「分享」→「加入主畫面」。
3. 從主畫面打開「橘子時鐘」，點右下角的設定，確認「離線使用」顯示「已可離線使用」。
4. 在主畫面版本裡設定提醒與價目。主畫面版本和 Safari 的資料是分開存的。

之後沒有網路也能打開。有網路時會自動更新到最新版。

## 檔案

- `index.html`：整個頁面。
- `sw.js`：離線快取。更新任何檔案時，把 `CACHE` 版本號加一。
- `fonts/`：Archivo 與昭源圓體 Chiron GoRound TC（Big5 字集子集），授權為 SIL OFL 1.1，見同資料夾的 OFL 檔。
- `icons/`、`manifest.webmanifest`：主畫面圖示與 App 設定。
