This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to show how React Servver Components work in the new Next.js 13 App router.

## Usage

First, install [JSON Server](https://www.npmjs.com/package/json-server) with the following command:

```bash
npm install -g json-server

```

Then add the following script to `package.json` to watch the data folder:

```json
"scripts": {
    // ...next.js scripts
    "json-server": "json-server --watch --port 4000 ./data/db.json",
  }
```

Start the development server with the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
