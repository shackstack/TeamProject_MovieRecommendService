# FRONT TEAM 개발 GUIDE

## 환경설정

### Std.

    1. 프로젝트를 pull 받은 후 npm install은 습관적으로 해줍시다.
    - fm대로라면 package.json을 확인하면서 라이브러리를 조율하겠지만 그부분은 넘어가겠습니다.
    2. 절대경로 import가 가능합니다. import하실땐 ../등의 상대경로를 피하고 src를 root 경로로 사용해주세요.

### 파일구조

![](https://velog.velcdn.com/images/artlogy/post/6971a2ed-488c-4dbb-b771-257cac1635bd/image.png)

#### /apis

이곳은 api server와 관련된 기능등을 담당합니다.
component에 직접적으로 axios를 정의하여 통신하지마시고 이곳에서 페이지별로 폴더를 만든 후
기능을 구현한뒤 필요한 component에서 import하여 사용해주세요.

###### `근거 : axios통신은 어플리케이션이 커질수록 같은 api기능을 반복적으로 사용할때가 많아 재사용성과 나중에 수정이 필요 할시 이곳에 정의된 api만 바꿔주면 전체적으로 적용이 되기때문에 유지보수가 수월해진다는 점에 이렇게 구조를 정의하였습니다. `

++ 또한 api 통신과 관련된 기본 설정은 **config.js**에 정의하였으니 확인해주세요!

#### /common

이곳은 다양한 곳에서 유용하게 사용될 커스텀 func를 정의하는 곳입니다.
예를들어 삼각형을 그려야하는데 이것을 함수로 만들어 다양한 곳에 사용하고싶다면 graph.js 파일을 만들어 정의하면 되겠죠?

#### /components

이곳은 컴포넌트를 정의하는 곳입니다.
컴포넌트를 정의할땐 대분류/중분류/소분류 식으로 컴포넌트를 쪼개어 주세요.

ex : ![](https://velog.velcdn.com/images/artlogy/post/eb37ccf5-0844-4068-8adf-3625c93f213c/image.png)

###### banner라는 컴포넌트가 있고 banner 컴포넌트의 종류로 slice와 desolve형태가 있으며 slice배너는 광고용과 커스텀용이 구분되어있는 파일구조입니다.

#### /hooks

이곳은 커스텀 훅을 관리하는 곳입니다.
유용하게 쓰일거같은 커스텀훅은 이곳에서 정의하여 관리해주세요.

#### /pages

이곳은 page로 쓰일 컴포넌트를 관리 하는 곳입니다.
각 폴더는 해당페이지의 root경로로 이름을 정해주시며
root폴더엔 root파일이 존재하여 전체적인 navigate를 해주셔야합니다.

#### /store

이곳은 redux를 store를 관리하는 곳입니다.
