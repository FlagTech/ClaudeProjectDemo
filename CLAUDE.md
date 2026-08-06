# Focus Board

## 專案說明

Focus Board 是一個使用 HTML、CSS 與原生 JavaScript 製作的輕量待辦事項網頁。所有資料儲存在瀏覽器的 localStorage，不需要後端服務或建置工具。

## 開發規則

- 不使用前端框架。
- 不加入 npm、Vite、Webpack 等建置工具。
- 不加入外部套件依賴。
- 資料儲存在 localStorage。
- HTML、CSS 與 JavaScript 分開存放。
- 修改功能時應維持既有視覺風格。
- 完成修改後，說明修改檔案與測試方式。

## 專案結構

- `src/index.html`：頁面結構
- `src/style.css`：介面樣式
- `src/app.js`：待辦事項邏輯
- `docs/PRD.md`：第一版產品需求

## 執行方式

不需要安裝任何套件，直接用瀏覽器開啟 `src/index.html` 即可使用。
若需要透過本機伺服器開啟（例如避免部分瀏覽器的檔案路徑限制），可執行：

```bash
uv run python -m http.server 8000 -d src
```

然後在瀏覽器開啟 `http://localhost:8000`。