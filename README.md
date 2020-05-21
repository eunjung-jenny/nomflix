# Nomflix

> 니콜라스와 함께 하는 react 시간!

## 환경설정

- VSCode
- git 2.20.1
- node 12.13.0
- npm 6.12.0
- npx 10.2.0

```bash
git --version
node -v
npm -v
npm install npx -g
npx -v
```

## 설계

### Screen

- [] Home
- [] TV Shows
- [] Search
- [] Detail

## 앱 기본 설정

- `create-react-app` : 리액트는 최신 javascript 문법을 사용, 이로 인해 `babel`, `webpack` 등을 사용하여 브라우저가 해석할 수 있게끔 downgrade 작업을 해줘야 하는 부분을 자동화해줌.

- root 폴더에 `.env` 파일 생성 후 `NODE_PATH="src"` 작성 : `src` 폴더를 기본 폴더로 인식
- `prop-types` : 컴포넌트 간 정보 매개체인 `props` 타입 체크

```bash
npx create-react-app [앱 이름]
npm add prop-types
npm start
```

## 리액트 활용

- Router Composition

```react
<Router>
  <Route path="/tv" component={TV} />
  <Route path="/tv/popular" render={() => <h1>Popular</h1>}/>
</Router>
```

- Switch & Redirect

```react
<Router>
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/tv" component={TV} />
    <Redirect from="*" to="/" />
  </Switch>
</Router>
```

