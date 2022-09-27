# Pool (v1.0)

<image src="https://user-images.githubusercontent.com/66757141/191906174-e5a5d5d4-6762-41ea-9447-11490985ff4f.png" width="100px"/>

## Contents
- [Latest Release](#latest-release)
- [Demo](#demo)
- [Start](#start)
- [Stack](#stack)
- [Folder Tree](#folder-tree)
- [Commit Rule](#commit-rule)
- [Branch](#branch)
- [Refactoring](#refactoring)

<br/>

## Latest Release
**Google Playstore**  
🔗 https://play.google.com/store/apps/details?id=com.app_pool_frontend  
**AppStore**  
🔗 Comming Soon  
**Web**  
🔗 https://app-pool-firebase.web.app/1

<br/>

## Demo

**Authentication (Login/SignUp)**

**Search Brand**

**Receive Message(Push Alarm)**

**Brand Assign**

**Create Message**

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
    <th>코어</th>
    <td>ReactNative, TypeScript</td>
  </tr>
  <tr>
    <th>상태관리</th>
    <td>Redux, React-Query</td>
  </tr>
  <tr>
    <th>패키지 매니저</th>
    <td>Yarn</td>
  </tr>
  <tr>
    <th>빌드</th>
    <td>Babel, Webpack    </td>
  </tr>
</table>


<br/>

## Folder Tree
```
├── android
├── ios
├── dist # 빌드된 web 폴더
├── api # api 요청 관련 폴더
├── assets # svg, image, font, theme 등 정적 파일 폴더
├── components # 여러 page에서 사용하는 컴포넌트들
├── screens # React Navigation에서 사용하는 Screen들
├── hooks # react hooks
├── slices # redux slices 폴더
├── storages # Asyncstorage 관련 폴더
├── web # Web 관련 폴더
│   └── assets # Web favicon, manifest 등의 파일 폴더
```

<br/>

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

<br/>

## Branch
| 브랜치명                        | 설명                  |
|--------------------------------|-----------------------|
| main                           | 메인 브랜치            |
| {type}/#{issueNumber}-{title}  | 각 이슈별 브랜치       |

<br/>

## Refactoring
v1.0 이후 백로그 (update 2022.09.20)

- [ ] 타 기기에서 유저 로그인시 기존 기기 토큰 만료 핸들링
- [x] (AppStore) 회원가입 시 생년월일, 성별 필드 선택사항으로 수정

