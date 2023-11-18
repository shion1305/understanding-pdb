# Node.jsのイメージを使用
FROM node:20

# アプリディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースをバンドル
COPY . .

# アプリケーションを起動するためのポートをエクスポーズ
EXPOSE 8080

# アプリケーションを起動
CMD ["node", "server.js"]
