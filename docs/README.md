# 🚇 지하철 노선도 미션

## 구현할 기능 목록

### 메뉴 버튼 관련 기능

- [x] 메뉴 버튼을 누르면 해당 요소를 화면에 보여줘야 한다.

### 입력 관련

- [x] 공백은 입력될 수 없다
- [x] 한글, 영어, 숫자로 구성된 입력값만 가능하다
- [x] 빈 값은 입력될 수 없다.
- [x] 잘못된 입력시 alert 메시지를 보여주고 재입력하게 해야 한다
- [x] 역 관리 입력 적용
- [x] 노선 관리 입력 적용
- [x] 구간 관리 입력 적용

### 지하철 역 관련 기능

- [x] 지하철 역을 등록하면 역 목록에 추가 되어야 한다.
- [x] 입력된 지하철 역의 이름이 2글자 이상인지 검증해야 한다.
- [x] 입력된 지하철 역의 이름이 중복되는지 검증해야 한다.
- [x] 이전에 입력된 지하철 역 목록이 새로고침에도 유지되어야 한다.
- [x] 잘못된 입력시 alert 메시지를 보여주고 재입력하게 해야 한다
- [x] 지하철 역 삭제시 역 목록에서 삭제 되어야 한다.

### 지하철 노선 관련 기능

- [x] 이전에 입력된 노선 데이터가 새로고침에도 유지되어야 한다.
- [x] 역 목록 리스트에서 상행, 하행 종점을 선택할수 있어야 한다.
- [x] 노선 추가시 노선 목록에 추가 되어야 한다.
- [x] 노선 삭제시 노선 목록에 삭제 되어야 한다.
- [x] 입력된 노선 정보가 올바른 값인지 검증해야 한다.
  - [x] 노선 이름이 중복된 값인지 검증한다.
  - [x] 저장된 역의 이름이 2개 이상 일때 새로운 노선을 생성할 수 있다.
  - [x] 상행 종점과 하행 종점은 달라야 한다.

### 지하철 구간 관리 기능

- [x] 노선 순서 입력시 올바른 값인지 검증해야 한다
  - [x] 순서 값은 0이상의 값을 가져야 한다
  - [x] 순서 값은 해당 노선의 길이 이하의 값을 가져야 한다
  - [x] 공백은 입력 될 수 없다
  - [x] 숫자만 입력 가능 하다
- [x] 노선 선택시 화면에 노선의 역 목록이 보여져야 한다.
- [x] 종점을 제거할 경우 다음 역이 종점이 되야 한다.
- [x] 같은 이름의 역이 중복되게 추가할 수 없다
- [x] 노선에 포함된 역이 두개 이하일 경우 역을 제거할수 없다.
  - [x] 포함된 역이 두개 이하 인지 검증 해야 한다.

### 지하철 노선도 출력 기능

- [x] 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 역 목록을 조회할 수 있다.

### localStorage 데이터 추가 삭제 기능

- [x] station, line의 정보를 저장해야 한다.
- [x] station, line의 정보를 삭제할 수 있다.
- [x] station, line의 정보가 유지 되어야 한다.

## 요구사항

- [x] 기존 요구사항
- [x] data속성을 활용하여 html 태그에 역, 노선, 구간의 유일한 데이터 값들을 관리한다.
- [x] localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

---

## 🔨 프로젝트 구조

```sh
.
├── LICENSE
├── README.md
├── docs
│   └── README.md
├── images
│   ├── line_manager.gif
│   ├── map_print_manager.gif
│   ├── section1.png
│   ├── section2.png
│   ├── section_manager.gif
│   └── station_manager.gif
├── index.html
└── src
    ├── components
    │   ├── LineManagerContainer
    │   │   ├── LineManager.js
    │   │   ├── LineManagerEvent.js
    │   │   └── LineManagerRender.js
    │   ├── MapPrintManagerContainer
    │   │   ├── MapPrintManager.js
    │   │   ├── MapPrintManagerEvent.js
    │   │   └── MapPrintManagerRender.js
    │   ├── MenuComponent.js
    │   ├── MenuComponentEvent.js
    │   ├── MenuComponentRender.js
    │   ├── SectionManagerContainer
    │   │   ├── SectionManager.js
    │   │   ├── SectionManagerEvent.js
    │   │   └── SectionManagerRender.js
    │   └── StationManagerContainer
    │       ├── StationManager.js
    │       ├── StationManagerEvent.js
    │       └── StationManagerRender.js
    ├── index.js
    ├── js
    │   ├── App.js
    │   └── Component.js
    ├── styles
    │   └── global.css
    └── utils
        ├── constants.js
        ├── isValidValue.js
        ├── myLocalStorageKey.js
        └── selectMenuComponent.js
```

---
