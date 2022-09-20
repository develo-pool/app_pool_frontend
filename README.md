# Pool (v1.0)

## Contents
- [Latest Release](#latest-release)
- [Demo](#demo)
- [Start](#start)
- [Stack](#stack)
- [Folder Tree](#folder-tree)
- [Commit Rule](#commit-rule)
- [Branch](#branch)
- [Refactoring](#refactoring)

## Latest Release
Google Playstore https://play.google.com/store/apps/details?id=com.app_pool_frontend  
AppStore - 심사중  
Web - https://app-pool-firebase.web.app/1

## Demo

## Start
```
yarn android
yarn ios
```

## Stack

## Folder Tree
```
수정필요
├── src
│   ├── api # api 요청 관련 폴더
│   ├── assets # svg, font, image 등 정적 파일 관련 폴더
│   ├── components # 여러 page에서 사용하는 공통 컴포넌트들
│   ├── constant # 프로젝트에서 사용하는 상수
│   ├── context # context API의 Provider
│   ├── hoc # 고차컴포넌트
│   ├── hooks # react hooks
│   ├── layouts # 프로젝트 전체적인 구조 스타일 담당
│   ├── mocks # msw를 활용한 api mocking
│   ├── pages # 라우터에서 사용하는 Page들
│   ├── service # 회원가입, 로그인 조건 등 비즈니스 로직
│   ├── styles # 다지안 관련 폴더
│   ├── types # 데이터 타입
│   └── utils #
```

## Commit Rule
| 타입     | 내용                  |
|----------|-----------------------|
| style    | 코드 스타일 혹은 포맷 |
| feature  | 새로운 기능           |
| fix      | 수정                  |
| refactor | 코드 리팩토링         |
| design   | 사용자 UI 수정        |
| test     | 테스트 코드           |
| docs     | 문서 수정             |
| chore    | 빌드 관련 수정        |

## Branch
| 브랜치명                        | 설명                  |
|--------------------------------|-----------------------|
| main                           | 메인 브랜치            |
| {type}/#{issueNumber}-{title}  | 각 이슈별 브랜치       |

## Refactoring
v1.0 이후의 백로그 (update 2022.09.20)

- [ ] 타 기기에서 유저 로그인시 기존 기기 토큰 만료 핸들링
