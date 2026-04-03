# Git

## Commit Message

일관된 메시지 작성을 위해 표준 컨벤션을 지향한다.

* **Conventional Commits** <Badge type="tip" text="Standard" /> : `feat:`, `fix:` 등의 접두사를 사용하여 커밋의 성격을 명확히 드러낸다.
* **Scope** <Badge type="info" text="Optional" /> : scope를 쓰기 시작했다면 계속 쓰고, 쓰지 않기로 했다면 계속 쓰지 않는다. scope를 쓰면 메시지를 더 간략히 적을 수 있고, 쓰지 않으면 그만큼 더 자세히 적어야 한다.

<CommitGenerator />

## Branch Strategy

작업의 규모와 협업 여부에 따라 적절한 브랜치 전략을 선택한다.

* **Single Branch**: 혼자 작업하는 경우 기본적으로 `main` 브랜치 하나로 작업한다. 특정 시점의 전체 코드가 어땠는지 추적하고, 필요하면 그 시점으로 롤백할 수 있으면 충분하다고 본다.
* **Backup Folder** <Badge type="warning" text="Fallback" /> : 이 선택은 혼자 `main` 브랜치 하나로 작업하는 흐름에서만 쓰는 개인용 안전장치이다. 큰 규모의 변경을 시작하기 전에 작업 폴더 자체를 복사해 되돌릴 지점을 따로 확보하는 방식에 가깝다. 협업용 브랜치 전략을 대체하려는 목적은 아니며, 이후에는 병합보다 파일 시스템 수준에서 필요한 부분을 직접 조정하는 편을 선호한다.
* **Collaboration Strategy** <Badge type="info" text="Multi-Branch" /> : 협업 시 `main`(프로덕션), `develop`(스테이징), `wip`(이슈 대응) 브랜치로 분리하여 작업한다.
* **WIP Branch Naming**: 이슈 번호와 제목을 조합한 `#{issue_num}/{issue_title}` 형식을 사용한다.

::: info Context
`Backup Folder`는 협업 규칙이 아니라 개인 작업에서의 보조 선택지이다. 협업이 시작되는 순간에는 팀의 브랜치 전략을 따른다.
:::
