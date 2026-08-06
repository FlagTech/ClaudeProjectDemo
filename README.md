# Focus Board

一個使用 HTML、CSS 與原生 JavaScript 製作的輕量待辦事項網頁，資料儲存在瀏覽器的 `localStorage`，不需要後端服務或任何套件即可執行。

## 功能列表

- 新增待辦事項（點擊按鈕或按 Enter）
- 空白內容不會被新增，前後多餘空白會自動移除
- 顯示待辦清單，每筆項目含完成狀態控制、內容與刪除按鈕
- 切換工作完成／未完成狀態，已完成項目有清楚的視覺差異
- 刪除單一待辦事項
- 工作統計：全部、未完成、已完成數量，會即時更新
- 無工作項目時顯示空白提示
- 資料儲存在 `localStorage`，重新整理或重新開啟瀏覽器後仍保留

## 技術說明

- HTML5、CSS3、原生 JavaScript（ES6+）
- 不使用 React、Vue、Svelte 等前端框架
- 不使用 npm、Vite、Webpack 等建置工具
- 不使用外部 API 或外部資料庫
- 不使用 CSS Framework
- 不需要使用者登入
- HTML、CSS、JavaScript 分別存放於獨立檔案

## 專案結構

```text
.
├── docs/
│   └── PRD.md
├── src/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── CLAUDE.md
├── README.md
└── .gitignore
```

## 執行方式

不需要安裝任何套件，直接用瀏覽器開啟 `src/index.html` 即可使用。

若需要透過本機伺服器開啟（例如避免部分瀏覽器的檔案路徑限制），可執行：

```bash
uv run python -m http.server 8000 -d src
```

然後在瀏覽器開啟 `http://localhost:8000`。
