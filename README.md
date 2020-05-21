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

### api

- [x] Now playing (Movie)
- [x] Upcoming (Movie)
- [x] Top Rated (TV, Movie)
- [x] Popular (TV, Movie)
- [x] Airing Today (TV)
- [x] Detail (TV, Movie)
- [x] Search (TV, Movie)



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

### Router

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

### Styling

1. `import "./App.css"`

2. 컴포넌트를 폴더로 구분

- `src/Components/Header/index.js` : Header.js 임포트
- `src/Components/Header/Header.js` : Header.css 임포트
- `src/Components/Header/Header.css`

3. className 의 로컬화

- 2번과 동일한 폴더 구조에서 `.css`확장자를 `.module.css` 로 변경
  - 임포트할 때는 `import styles from "./Header.module.css"`  로 작성
  - 클래스명은 `className={styles.클래스명}` 로 작성

4. **styled-components**

- 로컬 스타일  `npm i styled-components`

```react
import styled from "styled-components";

const [이름] = styled.[태그]`
	[스타일]
`;
```

- 글로벌 스타일 `npm i styled-reset`
  - `src/Components/GlobalStyles.js` 생성
  - `App.js` 에서 임포트

```javascript
// GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
`;

export default globalStyles;
```

- 반응형 스타일

```js
const Item = styled.li`
  padding: 10px 15px;
  border-bottom: 3px solid
    ${(props) =>
      props.current ? "yellowgreen" : "transparent"};
`;

<Item current="true" />
```

### 컨테이너-프리젠터 패턴

- 컨테이너: 데이터를 불러오는 역할 (w/ api, state, logics)
- 프리젠터: 화면에 보여주는 역할 (함수형 컴포넌트)
- 전체 흐름
  - index.js => App.js => Router => (component) index.js => Container.js => api => render => componentDidMount => setState => render => return Presenter.js

## 해야할 것

- 서버 만들어서 api key 숨기기 (키 변경 필요)