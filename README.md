# Pool (v1.0)

<image src="https://user-images.githubusercontent.com/66757141/191906174-e5a5d5d4-6762-41ea-9447-11490985ff4f.png" width="100px"/>

## Contents
- [Summary](#summary)
- [Latest Release](#latest-release)
- [Demo](#demo)
- [Start](#start)
- [Stack](#stack)
- [Folder Tree](#folder-tree)
- [Commit Rule](#commit-rule)
- [Branch](#branch)
- [Refactoring](#refactoring)

<br/>

## Summary

`바로 닿는 메세지 POOL`은 `Push 알림`으로 브랜드와 팔로워를 잇는 강력한 메세지 서비스입니다.
- 브랜드 등록 심사 요청을 통해 누구나 `브랜드`가 될 수 있습니다.
- 브랜드는 `Push 알림 메세지`를 생성할 수 있습니다.
- 유저는 원하는 브랜드를 팔로우하여 `Push 알림 메세지`를 받아볼 수 있습니다.

<br/>

## Latest Release
<table>
  <tr>
    <th align='left'>Google Playstore</th>
    <td>https://play.google.com/store/apps/details?id=com.app_pool_frontend</td>
  </tr>
  <tr>
    <th align='left'>AppStore</th>
    <td>https://apps.apple.com/kr/app/pool/id1640180474  </td>
  </tr>
  <tr>
    <th align='left'>Web</th>
    <td>https://app-pool-firebase.web.app</td>
  </tr>
</table>

_\* 서버 운영이 2022.11로 종료되었습니다._

<br/>

## Demo

**Authentication (SignUp/Login)**  
<image src="https://user-images.githubusercontent.com/72551358/197339969-3f884440-128e-45f1-902b-54088f3a5dd1.gif" width="150px"/>
<image src="https://user-images.githubusercontent.com/72551358/197340008-d22c2c8d-1f1b-4c46-a8df-78e138a45d7d.gif" width="150px"/>

**Search Brand / Follow&UnFollow**  
<image src="https://user-images.githubusercontent.com/72551358/197339992-f0f7d9f3-6032-4126-8ff1-4e346da88dce.gif" width="150px"/>

**Read Messages / Create Comment**  
<image src="https://user-images.githubusercontent.com/72551358/197340006-2e55f7cb-5043-418d-b455-c3541c28c097.gif" width="150px"/>

**Brand Assign**  
<image src="https://user-images.githubusercontent.com/72551358/197341212-86abe19d-2447-454e-b328-a767af815577.gif" width="150px"/>

**Create Message**  
<image src="https://user-images.githubusercontent.com/72551358/197340004-d5b0a7c8-bbee-4534-84a9-c9cf18283545.gif" width="150px"/>

**Receive Message(Push Alarm)**

**Information Web**  
<image src="https://user-images.githubusercontent.com/72551358/197341213-881ecc14-9a98-49df-8b54-8077a4a15247.gif" width="150px"/>

<br/>

## Start
```
[bundler]
$ yarn start #run bundler

[mobile]
$ yarn android #run android emulator & bundler 
$ yarn ios #run ios emulator & bundler

[web]
$ yarn web #start web
$ yarn build #build web to dist folder

[lint]
$ yarn lint #run eslint
```

<br/>

## Stack

<table>
  <tr>
    <th align='left'>Core</th>
    <td>ReactNative, TypeScript</td>
  </tr>
  <tr>
    <th align='left'>State Management</th>
    <td>Redux, React-Query</td>
  </tr>
  <tr>
    <th align='left'>Package Manager</th>
    <td>Yarn</td>
  </tr>
  <tr>
    <th align='left'>Build</th>
    <td>Babel, Webpack    </td>
  </tr>
</table>


<br/>

## Folder Tree
```python
📂.github
 ┣ 📂workflows
📂dist # 빌드된 web 폴더
📂android
📂ios
📂web # Web 관련 폴더
📂assets # svg, image, font, theme 등 정적 파일 폴더
 ┣ 📂fonts
 ┣ theme.ts
📂src
 ┣ 📂api # api 요청 관련 폴더
 ┣ 📂components # 여러 page에서 사용하는 컴포넌트들
 ┣ 📂hooks # react hooks
 ┣ 📂screens # React Navigation에서 사용하는 Screen들
 ┣ 📂slices # redux slices 폴더
 ┣ 📂storages # Asyncstorage 관련 폴더
 ┣ App.tsx
 ┗ index.tsx
```

<br/>

## Commit Rule
| 타입     | 내용                  |
|----------|----------------------|
| style    | 코드 스타일 혹은 포맷 |
| feature  | 새로운 기능           |
| fix      | 수정                 |
| refactor | 코드 리팩토링         |
| design   | 사용자 UI 수정        |
| test     | 테스트 코드           |
| docs     | 문서 수정             |
| chore    | 빌드 관련 수정        |

<br/>

## Branch Rule
| 브랜치명                        | 설명                  |
|--------------------------------|-----------------------|
| main                           | 메인 브랜치            |
| {type}/#{issueNumber}-{title}  | 각 이슈별 브랜치       |

<br/>

## Refactoring
v1.0 이후 백로그 (update 2022.09.20)

- [ ] 타 기기에서 유저 로그인시 기존 기기 토큰 만료 핸들링
- [x] (AppStore) 회원가입 시 생년월일, 성별 필드 선택사항으로 수정

