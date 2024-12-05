import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React, { useState } from 'react';
import { Container, Row, Button, Col, Badge } from 'react-bootstrap';
import { MathJax, MathJaxContext } from 'better-react-mathjax'

const publicUrl = process.env.PUBLIC_URL;
const questionImg = 'width: 100%; height: auto; maxWidth: 600px; display: block; margin: 0 auto;';
const questions = {
    UNIX시스템: [//==================================================
        { // 2017 기출문제
            question: "다음중 GNU 프로젝트와의 관련성이 가장 적은 것은?",
            options: ["리처드 스톨먼", "GPL", "Apache 서버", "자유 소프트웨어 운동"],
            answer: 2
        },
        {
            question: "리눅스 표준 디렉터리의 용도에 관한 설명으로 잘못된 것은?",
            options: ["/proc - 커널이 사용하는 가상의 파일 시스템",
                "/home - 사용자의 홈 디렉터리가 생성되는 곳",
                "/dev - 시스템 운영 중에 생기는 가변 자료가 저장되는 곳",
                "/etc - 시스템의 중요 환경 설정 파일이 위치하는 곳"],
            answer: 2
        },
        {
            question: "셸의 명령 행에서 사용하는 특수 문자에 관한 설명이다. 잘못된 것은?",
            options: ["| : 특수 문자 앞에 붙어 특수 문자의 기능을 제거함",
                ">> : 표준 출력을 파일의 끝에 덧붙일 때 사용함",
                "# : 이후의 문자들이 주석으로 처리됨",
                "! : 명령 히스토리 기능을 이용할 때 사용함"],
            answer: 0
        },
        {
            question: "다음 명령의 실행 결과로 생각되는 것은? 맨 앞의 $는 셸 프롬프트이며 passwd는 비밀번호를 바꿀 때 사용하는 명령이다.",
            content: '$ ls $(which passwd)',
            options: ["/etc/passwd",
                "/usr/bin/passwd",
                "which passwd",
                "$(which passwd"],
            answer: 1
        },
        {
            question: "텍스트 파일의 내용을 화면에 출력할 때 사용하는 명령이 아닌 것은?",
            options: ["cat",
                "grep",
                "more",
                "less"],
            answer: 1
        },
        {
            question: "그래픽 사용자 환경과 네트워크 서비스 및 다중 사용자 환경을 지원하는 런레벨로서 최근 리눅스 배포판에서 기본으로 설정된 런레벨은 무엇인가?",
            options: ["3",
                "4",
                "5",
                "6"],
            answer: 2
        },
        {
            question: "웹 서버 데몬인 httpd를 재시작 시키는 명령은?",
            options: ["service httpd start",
                "service httpd restart",
                "chkconfig httpd on",
                "chkconfig httpd restart"],
            answer: 1
        },
        {
            question: "sudo 명령은 허가된 사용자로 하여금 관리자 명령을 수행할 수 있게 한다. 이 명령과 깊은 관련이 있는 파일은?",
            options: ["/bin/chown",
                "/etc/mtab",
                "/etc/passwd",
                "/etc/sudoers"],
            answer: 3
        },
        {
            question: "사용자의 비밀번호 만료에 관한 정보를 변경하기 위한 관리자 명령은 무엇인가?",
            options: ["chage",
                "useradd",
                "passwd",
                "userdel"],
            answer: 0
        },
        {
            question: "vi를 사용한 편집 작업 중에 ESC 키를 두번 치면 어떤 모드로 이동하는가?",
            options: ["입력 모드",
                "명령 모드",
                "라인 모드",
                "검색 모드"],
            answer: 1
        },
        {
            question: "다음 명령이 의미하는 것은?",
            content: '$ find /home -user kdhong -ls',
            options: ["디렉터리 /home에서 이름이 kdhong인 파일을 찾아 출력한다.",
                "사용자 kdhong이 실행시킨 프로세스를 찾아 상태 정보를 /home에 저장한다.",
                "사용자 kdhong의 홈 디렉터리에 저장된 파일의 목록을 출력한다.",
                "디렉터리 /home에서 사용자 kdhong이 소유하고 있는 파일을 찾아 출력한다."],
            answer: 3
        },
        {
            question: "파일 시스템이나 디스크 관리를 위해 사용되는 명령의 일반적 설명으로 올바른 것은?",
            options: ["du - 저장 장치에 파티션을 생성",
                "parted - 마운트되어 있지 않은 파일 시스템을 검사",
                "mkfs - 파티션이나 논리 볼륨에 파일 시스템을 생성",
                "fdisk - 파일 시스템의 무결성을 검사하고 수정"],
            answer: 2
        },
        {
            question: "다음 명령이 의미하는 것은?",
            content: '$ firefox&',
            options: ["firefox를 포어그라운드 프로세스로 실행시킨다.",
                "firefox를 백그라운드 프로세스로 실행시킨다.",
                "터미널을 종료시켜도 firefox를 계속 수행하게 한다.",
                "백그라운드로 실행 중인 firefox를 포어그라운드로 전환시킨다."],
            answer: 1
        },
        {
            question: "cron 서비스에 관한 설명으로 올바른 것은?",
            options: ["파일 시스템의 복구를 대비해 저널링을 수행한다.",
                "패키지 관리를 위해 저장소 정보를 자동으로 갱신한다.",
                "지정된 시간에 자동으로 작업을 수행하게 한다.",
                "전자서명으로 네트워크 연결을 인증한다."],
            answer: 2
        },
        {
            question: "RPM과 비교했을 때 YUM을 이용한 패키지 관리의 장점은 무엇인가?",
            options: ["이미 설치된 패키지의 업그레이드가 가능하다.",
                "패키지의 변형 여부를 검증할 수 있다.",
                "패키지의 설정 파일을 확인할 수 있다.",
                "패키지 의존성 문제를 해결할 수 있다."],
            answer: 3
        },
        {
            question: "다음 명령이 의미하는것은?",
            content: '$ yum list installed',
            options: ["패키지를 설치함",
                "설치되어 있는 패키지 목록을 출력함",
                "패키지의 설명과 요약 정보를 출력함",
                "패키지가 의존하는 요소와 그것을 제공하는 패키지를 나열함"],
            answer: 1
        },
        {
            question: "다음 실행 결과를 보고 물음에 답하여라 $는 셸 프롬프트이다. 셸 스크립트 whoson.sh(접근권한은 755로 가정)를 실행시키기 위한 명령으로 잘못된 것은?",
            content: '$ cat whoson.sh\n#!/bin/bash\n\nwhoson(){\n  date\n  user=$USER\n  echo "$user currently logged on"\n}\n\necho "Step 1"\nwhoson\necho "Step 3"\n$',
            options: ["bash -x whoson.sh",
                "./whoson.sh",
                "source whoson.sh",
                "builtin whoson.sh"],
            answer: 3
        },
        {
            question: "다음 실행 결과를 보고 물음에 답하여라 $는 셸 프롬프트이다. 다음중 셸 스크립트 whoson.sh의 실행 결과로 생각되는 것은?",
            content: '$ cat whoson.sh\n#!/bin/bash\n\nwhoson(){\n  date\n  user=$USER\n  echo "$user currently logged on"\n}\n\necho "Step 1"\nwhoson\necho "Step 3"\n$',
            options: ["Step1",
                "Step1\nStep3",
                "2017. 12. 10. (일) 10:45:04 KST\nkdhong currently logged on",
                "Step 1\n2017. 12. 10. (일) 10:45:04 KST\nkdhong currently logged on\nStep3"],
            answer: 3
        },
        {
            question: "다음은 셸 스크립트의 일부이다. 밑줄 그은 부분의 의미를 바르게 설명한것은?",
            content: '# .bashrc\nif <u>[ -f /etc/bashrc ]</u>; then\n        . /etc/bashrc\nfi',
            options: ["/etc/bashrc가 존재하고 정규 파일이면 참",
                "/etc/bashrc가 존재하고 디렉터리이면 참",
                "/etc/bashrc가 실행 가능한 파일이면 참",
                "/etc/bashrc가 존재하지 않으면 참"],
            answer: 0
        },
        {
            question: "네트워크 관련 명령에 관한 일반적 설명으로 잘못된 것은?",
            options: ["ping - ICMP를 이용하여 원격 호스트와의 연결 여부를 점검",
                "netstat - DNS 서버를 이용하여 호스트의 IP 주소를 확인",
                "traceroute - 현재 호스트에서 특정 호스트까지 통신이 이루어지는 경로를 확인",
                "ifconfig - 네트워크 인터페이스의 MAC 주소나 IP 주소 등을 확인"],
            answer: 1
        },
        {
            question: "다음중 네트워크 관련 설정 파일로 볼 수 없는 것은?",
            options: ["/etc/sysconfig/network",
                "/etc/resolv.conf",
                "/etc/fstab",
                "/etc/sysconfig/network-scripts/ifcfg-eth0"],
            answer: 2
        },
        {
            question: "다음 중 암호화된 방식으로 데이터를 송수신하는 프로그램은?",
            options: ["sftp",
                "rcp",
                "rlogin",
                "telnet"],
            answer: 0
        },
        {
            question: "SSH 서버를 운영하여 서비스를 제공하고자 할 때, 점검해야 할 사항과 거리가 먼 것은?",
            options: ["방화벽 설정에서 해당 포트를 열어둔다.",
                "sshd 프로그램이 실행 중인지 확인한다.",
                "웹 서버가 실행 중인지 확인한다.",
                "/etc/hosts.allow와 /etc/hosts.deny를 확인한다."],
            answer: 2
        },
        {
            question: "Apache 웹 서버의 설정 파일인 httpd.conf에서 다음 항목이 의미하는 것은 무엇인가?",
            content: 'DocumentRoot    /var/www/html',
            options: ["설정 파일에서 파일이 참조될 때 기준 디렉터리를 설정",
                "웹 서버가 웹 페이지를 찾을 때의 루트 디렉터리를 설정",
                "웹 서버 관리자의 이메일 주소를 설정",
                "웹 서버가 사용할 TCP 포트 번호를 설정"],
            answer: 1
        },
        {
            question: "간단히 웹 사이트를 구축하고자 할 때 설치해야 하는 프로그램으로 보기 어려운 것은?",
            options: ["Apache 웹 서버",
                "PHP 스크립트 처리기",
                "MySQL 데이터베이스 관리 시스템",
                "PuTTY 클라이언트 프로그램"],
            answer: 3
        },
        { // 2018 기출문제
            question: "리눅스 커널을 포함하여 리눅스 배포판에서 사용되는 많은 소프트웨어들은 주로 어떤 라이선스를 따르고 있는가?",
            options: ["Apache",
                "BSD",
                "GPL",
                "MPL"],
            answer: 2
        },
        {
            question: "다음 중 레드햇 계열의 리눅스 배포판이 아닌 것은?",
            options: ["CentOS",
                "RHEL",
                "ubuntu",
                "fedora"],
            answer: 2
        },
        {
            question: "리눅스 시스템에서 표준 디렉터리의 용도에 관한 설명으로 올바른 것은?",
            options: ["/etc - 시스템의 주요 환경 설정 파일이 위치하는 디렉터리",
                "/user - 사용자의 홈 디렉터리가 생성되는 디렉터리",
                "/dev - 이동식 저장 장치의 마운트 지점을 제공하는 디렉터리",
                "/var - 커널이 사용하는 가상의 파일 시스템이 위치하는 디렉터리"],
            answer: 0
        },
        {
            question: "셸의 명령 행에서 사용하는 특수 문자에 관한 설명으로 올바른 것은?",
            options: ["| : 특수 문자 앞에 붙어 특수 문자의 기능을 제거함",
                ">> : 명령 수행을 위해 파일의 입력이 필요할 때 사용함",
                "# : 명령을 백그라운드로 실행할 때 사용함",
                "! : 명령 히스토리 기능을 이용할 때 사용함"],
            answer: 3
        },
        {
            question: "셸에서 사용되는 명령이 어떻게 해석되는지 알기 위해 아래 밑줄 부분에서 사용해야 하는 명령은 무엇인가? $는 셸 프롬프트이며 cd는 셸의 내장 명령이다.",
            content: '$ <u>           </u>cd <Enter>\ncd is a shell builtin',
            options: ["alias",
                "type",
                "whereis",
                "man"],
            answer: 1
        },
        {
            question: "파일이냐 디렉터리냐에 따라 접근권한의 의미가 약간 다르다. 다음중 '디렉터리의 읽기 권한'을 의미하는 설명은?",
            options: ["디렉터리에 존재하는 파일의 내용을 읽을 수 있다.",
                "디렉터리에 어떤 파일과 서브 디렉터리가 있는지 목록을 볼 수 있다.",
                "접근권한, 소유자, 크기, 수정 시간 등 디렉터리의 메타 정보를 조회할 수 있다.",
                "cd 명령을 사용하여 해당 디렉터리로 이동할 수 있다."],
            answer: 1
        },
        {
            question: "리눅스 시스템의 런레벨(runlevel)에 관한 설명으로 잘못된 것은?",
            options: ["0 - 시스템 종료",
                "1 - 단일 사용자 모드",
                "3 - 네트워크 기능을 지원하는 다중 사용자 모드",
                "5 - 시스템 재부팅"],
            answer: 3
        },
        {
            question: "관리자가 사용자 계정을 생성할 때, 사용자 계정의 기본적 환경설정이 필요하다. 이때 사용되는 설정 파일(또는 디렉터리)이 아닌 것은?",
            options: ["/etc/skel/",
                "/etc/login.defs",
                "/etc/fstab",
                "/etc/default/useradd"],
            answer: 2
        },
        {
            question: "vi를 이용한 편집 작업 중에 ESC키를 두번 치면 항상 어떤 모드로 이동하는가?",
            options: ["입력 모드",
                "명령 모드",
                "라인 모드",
                "검색 모드"],
            answer: 1
        },
        {
            question: "다음 명령이 의미하는 것으로 적당한 것은? $는 셸 프롬프트이다.",
            content: '$ umount -a -t iso9660',
            options: ["해당 유형의 모든 파일시스템이 마운트 가능한지 점검함",
                "/etc/inittab에 나열된 해당 유형의 모든 파일시스템을 점검한 후 마운트함",
                "/etc/fstab에 나열된 해당 유형의 파일시스템을 모두 언마운트함",
                "/etc/fstab에 나열된 모든 파일시스템을 언마운트함"],
            answer: 2
        },
        {
            question: "볼륨 관리에서 사용되는 용어의 설명이다. 잘못된 것은?",
            options: ["물리볼륨(pv) - 하나의 물리적 디스크를 말함",
                "볼륨그룹(vg) - 여러 물리볼륨을 하나로 묶은 것으로 가상의 하드디스크로 생각할 수 있음",
                "논리볼륨(lv) - 볼륨 그룹에서 가용 공간을 분할한 것으로 기존 파티션과 개념적으로 일치함",
                "물리 익스텐트(pe) - 하나의 표준 블록 디아비스로 표현되며 마운트 작업과 파일시스템 검사의 단위가 됨"],
            answer: 3
        },
        {
            question: "파일 시스템 유형에 관한 설명으로 잘못된 것은?",
            options: ["XFS - 리눅스의 차세대 파일 시스템으로 여러 서버에서 동시 마운트와 동시 접근이 가능한 공유 파일 시스템이다.",
                "ext2 - 저널링을 지원하지 않으며 100MB 이하의 작은 파티션에 사용하는 것이 좋다.",
                "ext4 - 레드햇 계열 리눅스의 기본 파일 시스템으로 범용이며 특별한 이유가 없다면 이것을 사용하면 된다.",
                "vfat - 윈도우 운영체제와 호환되는 파일 시스템으로 USB에서 주로 사용된다."],
            answer: 0
        },
        {
            question: "다음 명령의 결과를 정확히 설명한 것은? $는 셸 프롬프트이다.",
            content: '$ ps',
            options: ["현재 터미널과 연결되어 있는 프로세스 중 EUID가 현재 사용자의 UID와 같은 프로세스를 보여준다.",
                "터미널을 종료해도 현재 실행 중인 프로그램이 종료되지 않고 계속 수행되게 한다.",
                "현재 사용자가 소유한 모든 프로세스를 출력한다. 데몬 프로세스처럼 터미널과 연결되어 있지 않은 프로세스도 출력한다.",
                "모든 사용자의 모든 프로세스를 자세히 보여준다."],
            answer: 0
        },
        {
            question: "특정 작업을 주기적으로 실행시키는 cron 서비스에 관한 설명이다. 잘못된 것은?",
            options: ["crond 데몬 프로그램이 1분 간격으로 설정 파일을 검사하여 수행한다.",
                "관리자가 시스템 수준의 설정 파일을 수정할 때, vi 편집기로 편집할 수 없으며 반드시 crontab 명령을 사용해야 한다.",
                "시스템 수준에서 /etc/crontab 파일과 /etc/cron.d/ 디렉터리에 존재하는 파일이 cron 서비스의 작업 설정 파일이다.",
                "일반 사용자도 자신만의 cron 작업을 등록하거나 수정할 수 있다."],
            answer: 1
        },
        {
            question: "다음 명령은 /usr/bin/passwd 파일의 자세한 정보를 보여준다. 이 파일에 적용된 특수권한과 관련된 설명 중 잘못된 것은? $는 셸 프롬프트이다.",
            content: '$ ls -l /usr/bin/passwd <Enter>\n-rwsr-xr-x. 1 root root 25980 2015-11-24 01:28 /usr/bin/passwd',
            options: ["passwd 파일에 특수권한인 SetUID가 설정되어 있다.",
                "일반 사용자가 passwd 명령을 실행할 때 root 권한으로 실행된다.",
                "일반 사용자 계정으로도 /usr/bin/passwd 파일을 vi 편집기로 직접 수정할 수 있다.",
                "일반 사용자가 passwd 명령을 사용하여 암호를 수정할 때, 암호가 저장된 /etc/shadow 파일의 수정이 가능하다."],
            answer: 2
        },
        {
            question: "다음은 RPM 패키지 관리에 대한 설명이다. 잘못된 것은?",
            options: ["RPM은 레드햇 계열 리눅스에서 패키지 파일의 표준 형식이다.",
                "RPM은 RPM 패키지 관리 프로그램(Rpm Package Manager)을 의미한다.",
                "rpm 명령을 사용하여 신규로 패키지를 설치하거나 기존 패키지를 업그레이드할 수 있다.",
                "rpm 명령을 사용하면 설치하고자 하는 패키지의 '선행 패지키'가 필요할 때 자동으로 찾아 설치해 준다."],
            answer: 3
        },
        {
            question: "yum 명령의 사용법을 설명한 것이다. 잘못된 것은?",
            options: ["yum list installed [패키지명] - 패키지를 설치",
                "yum info [패키지명] - 패키지의 설명과 요약 정보를 출력",
                "yum remove 패키지명 - 패키지를 삭제",
                "yum history - 패키지 설치 이력을 확인"],
            answer: 0
        },
        {
            question: "두 파일을 압축하고 연결시켜 하나의 압축 파일(bar.gz)을 만드는 명령으로 적당하지 않은 것은 무엇인가? gzip 명령의 -c 옵션은 결과를 표준 출력으로 내보낸다.",
            options: ["cat file1 file2 | gzip > bar.gz",
                "gzip -c file1 > bar.gz; gzip -c file2 >> bar.gz",
                "gzip -c file1 file2 > bar.gz",
                "gzip file1 file2 > bar.gz"],
            answer: 3
        },
        {
            question: "Apache 웹 서버의 설정 파일인 httpd.conf에서 다음 항목이 의미하는 것은 무엇인가?",
            content: 'Listen 80\nListen 8080',
            options: ["클라이언트가 보낼 수 있는 최대 요청 수를 설정",
                "웹 서버가 사용할 TCP 포트 번호를 설정",
                "유휴 자식 서버 프로세스 수의 최댓값을 설정",
                "동시에 접속 가능한 클라이언트 수의 최댓값을 설정"],
            answer: 1
        },
        {
            question: "실행중인 Apache 웹 서버의 설정을 변경한 후에는 프로그램을 다시 시작해야 효력이 발생한다. 이때 적당한 명령을 보기에서 찾으면 무엇인가?",
            options: ["chkconfig httpd on",
                "chkconfig --list sshd",
                "service sshd restart",
                "service httpd restart"],
            answer: 3
        },
        {
            question: "다음은 2개의 정수를 비교하여 결과를 표시한 후 두 정수의 합을 출력하는 셸 스크립이다. 실행 결과를 보고 물음에 답하여라. $는 셸 프롬프트이다. 2개의 인수가 제공되었는지 확인하기 위해 밑줄 친 ㄱ에 들어갈 내용으로 적당한 것은?",
            content: '$ cat intCompare.sh\n#!/bin/bash\nif <u>     ㄱ     </u>then\n  echo "You must supply two numbers as arguments"\n  exit 1\nfi\nif [ $1 -eq $2 ]; then\n  echo "$1 equals to $2."\nelif [ $1 -gt $2 ]; then\n  echo "$1 is greater than $2."\nelse\n  echo "$1 is less than $2."\nfi\necho <u>     ㄴ     </u>\n$ chmod u+x intCompare.sh\n$ <u>     ㄷ     </u>\n36 is less than 68.\n36 + 68는 104입니다.',
            options: ["test $* -ne 2;",
                "test $# -eq 2;",
                "[ $# -ne 2 ];",
                "[ $# -eq 2 ];"],
            answer: 2
        },
        {
            question: "다음은 2개의 정수를 비교하여 결과를 표시한 후 두 정수의 합을 출력하는 셸 스크립이다. 실행 결과를 보고 물음에 답하여라. $는 셸 프롬프트이다. 두 정수의 합을 출력하기 위해 밑줄 친 ㄴ에 들어갈 내용으로 적당한 것은?",
            content: '$ cat intCompare.sh\n#!/bin/bash\nif <u>     ㄱ     </u>then\n  echo "You must supply two numbers as arguments"\n  exit 1\nfi\nif [ $1 -eq $2 ]; then\n  echo "$1 equals to $2."\nelif [ $1 -gt $2 ]; then\n  echo "$1 is greater than $2."\nelse\n  echo "$1 is less than $2."\nfi\necho <u>     ㄴ     </u>\n$ chmod u+x intCompare.sh\n$ <u>     ㄷ     </u>\n36 is less than 68.\n36 + 68는 104입니다.',
            options: ["\"$1 + $2는 ($1+$2)입니다.\"",
                "\"$1 + $2는 $($1+$2)입니다.\"",
                "'$1 + $2는 $[$1+$2]입니다.'",
                "\"$1 + $2는 $[$1+$2]입니다.\""],
            answer: 3
        },
        {
            question: "다음은 2개의 정수를 비교하여 결과를 표시한 후 두 정수의 합을 출력하는 셸 스크립이다. 실행 결과를 보고 물음에 답하여라. $는 셸 프롬프트이다. 셸 스크립트를 실행하기 위해 밑줄 친 ㄷ에 들어갈 명령으로 적당한 것은?",
            content: '$ cat intCompare.sh\n#!/bin/bash\nif <u>     ㄱ     </u>then\n  echo "You must supply two numbers as arguments"\n  exit 1\nfi\nif [ $1 -eq $2 ]; then\n  echo "$1 equals to $2."\nelif [ $1 -gt $2 ]; then\n  echo "$1 is greater than $2."\nelse\n  echo "$1 is less than $2."\nfi\necho <u>     ㄴ     </u>\n$ chmod u+x intCompare.sh\n$ <u>     ㄷ     </u>\n36 is less than 68.\n36 + 68는 104입니다.',
            options: ["./intCompare.sh 36 68",
                "script inCompare.sh 36 68",
                "./intCompare 36 68",
                "intCompare 36 68"],
            answer: 0
        },
        {
            question: "네트워크 점검 명령에 관한 일반적 설명으로 잘못된 것은?",
            options: ["ifconfig - 네트워크 인터페이스 정보를 확인하거나 설정",
                "nslookup - 네트워크 연결 상태와 사용 현황을 확인",
                "traceroute - 특정 호스트까지 패킷의 통신 경로를 확인",
                "route - IP 라우팅 테이블의 설정 또는 확인"],
            answer: 1
        },
        {
            question: "보호된 원격 로그인이나 원격 데이터 통신에 사용되는 프로토콜로서 전자서명으로 연결을 인증하고 패킷을 암호화하여 전송하는 방식은?",
            options: ["Telnet",
                "FTP",
                "SSH",
                "SCP"],
            answer: 2
        },
        { // 2019 기출문제
            question: "CentOS 리눅스에서 기본으로 주어지는 쉘의 종류는 무엇인가?",
            options: ["Bourne Shell(sh)",
                "Bourne Again Shell(bash)",
                "C Shell(csh)",
                "Korn Shell(ksh)"],
            answer: 1
        },
        {
            question: "셸 프롬프트에서 사용된 명령을 해석할 때, 명령의 종류에 해당하지 않는 것은?",
            options: ["셸 예약어",
                "셸에서 정의되어 있는 함수 이름",
                "실행 파일이 존재하는 일반 명령",
                "설치되어 있는 패키지의 이름"],
            answer: 3
        },
        {
            question: "리눅스 시스템에서 표준 디렉터리의 용도에 관한 설명으로 잘못된 것은?",
            options: ["/etc - 시스템의 주요 환경 설정 파일이 위치하는 디렉터리",
                "/home - 사용자의 홈 디렉터리가 생성되는 디렉터리",
                "/dev - 시스템 운영 중에 생기는 가변 자료가 저자외는 곳",
                "/proc - 커널이 사용하는 가상의 파일 시스템"],
            answer: 2
        },
        {
            question: "셸의 명령 행에서 사용하는 특수 문자에 관한 설명으로 잘못된 것은?",
            options: ["| - 앞 명령의 출력을 다음 명령의 입력으로 연결시킴",
                ">> - 명령 수행을 위해 파일로부터 입력이 필요할 때 사용함",
                "; - 여러 명령을 순서대로 실행할 때 구분을 위해 사용함",
                "! - 명령 히스토리 기능을 이용할 때 사용함"],
            answer: 1
        },
        {
            question: "리눅스 명령에 관한 설명이다. 잘못된 것은?",
            options: ["type - 텍스트 파일의 내용을 화면에 출력하는 명령",
                "file - 파일의 종류를 알려주는 명령",
                "umask - 파일 접근권한의 기본 값을 출력하거나 설정하는 명령",
                "ln - 하드 링크나 심볼릭 링크를 만드는 명령"],
            answer: 0
        },
        {
            question: "cd 명령으로 특정 디렉터리로 이동하여 해당 디렉터리에 존재하는 파일의 목록을 ls 명령으로 확인하고자 한다. 이 디렉터리에 어떤 권한을 가지고 있어야 가능한가?",
            options: ["읽기 권한만 가지고 있으면 가능하다",
                "적어도 읽기와 쓰기 권한을 가지고 있어야 한다.",
                "적어도 읽기와 실행 권한을 가지고 있어야 한다.",
                "반드시 읽기, 쓰기, 실행 권한을 모두 가지고 있어야 한다."],
            answer: 2
        },
        {
            question: "다음 중 관리자가 아닌 일반 사용자도 수행할 수 있는 명령은 무엇인가?",
            options: ["useradd",
                "usermod",
                "shutdown",
                "passwd"],
            answer: 3
        },
        {
            question: "사용자가 단지 자신의 암호만 아는 상황에서도 sudo 명령을 사용하면 해당 사용자에게 허용된 특별한 명령을 수행할 수 있다. 단, 관리자가 \"누가 어디서 어떤 명령을 할 수 있는가\"를 설정해야 한다. 어느 파일에 설정하는가?",
            options: ["/etc/login.defs",
                "/etc/sudoers",
                "/etc/shadow",
                "/etc/libuser.conf"],
            answer: 1
        },
        {
            question: "vi 편집기가 명령 모드에 있을 때, 파일 전체를 대상으로 문자열 패턴을 검색하는 명령키는?",
            options: [":pattern<Enter>",
                "?pattern<Enter>",
                "!pattern<Enter>",
                "/pattern<Enter>"],
            answer: 3
        },
        {
            question: "find 명령의 사용에 관한 설명이다. 잘못된 것은?",
            options: ["사용자 홈 디렉터리에서 단순히 find 명령을 실행하면 현재 디렉터리와 서브 디렉터리에 있는 모든 파일과 디렉터리의 이름을 라인 단위로 출력한다.",
                "find /etc -name passwd는 파일의 이름이 문자열 pass로 시작하는 모든 파일을 /etc에서 찾아 출력한다.",
                "find ~ | wc -l은 사용자가 가지고 있는 파일의 총 개수를 출력한다.",
                "지정된 디렉터리에 읽기와 실행 권한이 없으면 find 명령은 파일을 검색하지 못한다."],
            answer: 1
        },
        {
            question: "보기는 파일 시스템 관리와 관련이 있는 설명이다. 잘못된 것은?",
            options: ["마운트는 파일 시스템을 특정 디렉터리에 붙여서 사용할 수 있게 하는 것이다.",
                "부팅시 자동으로 마운트되는 파일 시스템이 /etc/fstab 파일에 기록되어 있다.",
                "inode는 파일의 이름을 포함하여 해당 파일의 모든 정보를 가지고 있다.",
                "논리 볼륨은 개념적으로 파티션과 일치하나 크기를 조정할 수 있다."],
            answer: 2
        },
        {
            question: "보기는 파일 시스템 또는 디스크 관리를 위해 사용되는 명령(또는 도구)에 관한 설명이다. 잘못된 것은?",
            options: ["fdisk - 하드 디스크 파티션을 관리하는 대화식 유틸리티",
                "fsck - 사용자의 디스크 사용량을 관리하는 명령",
                "mkfs - 파티션이나 논리 볼륨에 파일 시스템을 만드는 명령",
                "LVM - 물리 볼륨/논리 볼륨/볼륨 그룹을 관리하기 위한 도구"],
            answer: 1
        },
        {
            question: "백그라운드 프로세스의 실행에 관한 설명이다. 잘못된 것은?",
            options: ["셸 프롬프트에서 명령의 끝에 &를 추가하여 실행하면 백그라운드 프로세스로 실행된다.",
                "입력을 요구하지 않고 장시간 실행되어야 하는 경우에 백그라운드 프로세스로 실행시키는 것이 좋다.",
                "백그라운드 프로세스는 터미널 출력은 가능하나 키보드 입력을 받을 수 없다.",
                "터미널 창을 종료하더라도 백그라운드 프로세스는 종료되지 않는다."],
            answer: 3
        },
        {
            question: "프로세스 관리를 위한 명령이 아닌 것은?",
            options: ["rpm",
                "ps",
                "top",
                "nice와 renice"],
            answer: 0
        },
        {
            question: "다음 명령의 의미는 무엇인가?",
            content: '$ yum list installed | grep sendmail',
            options: ["sendmail 패키지가 설치되어 있는지 확인한다.",
                "sendmail 패키지의 설치가 가능한지 확인한다.",
                "sendmail이 의존하고 있는 다른 패키지 목록을 나열한다.",
                "sendmail 패키지를 설치하고 요약 정보를 출력한다."],
            answer: 0
        },
        {
            question: "다음 명령의 의미는 무엇인가?",
            content: '$ tar cvf bar.tar backup/',
            options: ["디렉터리 backup에 있는 파일들을 기존 아카이브 bar.tar의 끝에 추가함",
                "아카이브 bar.tar에 있는 파일 목록과 디렉터리 backup에 있는 파일 목록을 함께 출력함",
                "아카이브 bar.tar에 있는 파일들을 디렉터리 backup에 풀어줌",
                "디렉터리 backup에 있는 파일들을 묶어 새로운 아카이브 bar.tar를 만듦"],
            answer: 3
        },
        {
            question: "testWhile.sh 파일은 1부터 10까지의 합을 계산하는 셸 스크립트이다. S가 합을 저장하는 변수이다. 실행 결과를 보고 물음에 답하여라. 조건 검사를 위해 밑줄 친 ㄱ에 들어가야 할 내용은?",
            content: '[kdhong@localhost ~]$ cat testWhile.sh\n#!bin/bash\nN=1\nS=0\nwhile <u>     ㄱ     </u> do\n  echo -n \"$N\"\n  S=<u>     ㄴ     </u>\n  N=$[$N+1]\ndone\necho\necho $S\n[kdhong@localhost ~]$ chmod u+x testWhile.sh\n[kdhong@localhost ~]$ <u>     ㄷ     </u>\n1 2 3 4 5 6 7 8 9 10\n55',
            options: ["test $N -ne 10;",
                "test $N -gt 10;",
                "[ $N -le 10 ];",
                "[$N <= 10];"],
            answer: 2
        },
        {
            question: "testWhile.sh 파일은 1부터 10까지의 합을 계산하는 셸 스크립트이다. S가 합을 저장하는 변수이다. 실행 결과를 보고 물음에 답하여라. 합을 계산하기 위한 수식으로 밑줄 친 ㄴ에 들어가야 할 내용은?",
            content: '[kdhong@localhost ~]$ cat testWhile.sh\n#!bin/bash\nN=1\nS=0\nwhile <u>     ㄱ     </u> do\n  echo -n \"$N\"\n  S=<u>     ㄴ     </u>\n  N=$[$N+1]\ndone\necho\necho $S\n[kdhong@localhost ~]$ chmod u+x testWhile.sh\n[kdhong@localhost ~]$ <u>     ㄷ     </u>\n1 2 3 4 5 6 7 8 9 10\n55',
            options: ["$($S+$N)",
                "$[S+N]",
                "$[$S+N]",
                "$[$S+$N]"],
            answer: 3
        },
        {
            question: "testWhile.sh 파일은 1부터 10까지의 합을 계산하는 셸 스크립트이다. S가 합을 저장하는 변수이다. 실행 결과를 보고 물음에 답하여라. 셸 스크립트를 실행하기 위해 밑줄 친 ㄷ에 들어갈 명령으로 적당하지 않은 것은?",
            content: '[kdhong@localhost ~]$ cat testWhile.sh\n#!bin/bash\nN=1\nS=0\nwhile <u>     ㄱ     </u> do\n  echo -n \"$N\"\n  S=<u>     ㄴ     </u>\n  N=$[$N+1]\ndone\necho\necho $S\n[kdhong@localhost ~]$ chmod u+x testWhile.sh\n[kdhong@localhost ~]$ <u>     ㄷ     </u>\n1 2 3 4 5 6 7 8 9 10\n55',
            options: [". testWhile.sh",
                "script testWhile.sh",
                "./testWhile.sh",
                "bash testWhile.sh"],
            answer: 1
        },
        {
            question: "네트워크 명령에 관한 일반적 설명으로 잘못된 것은?",
            options: ["traceroute - 현재 호스트에서 특정 호스트까지 통신이 이루어진 경로를 확인한다.",
                "ping - DNS를 이용하여 호스트의 IP 주소를 확인한다.",
                "route - IP 라우팅 테이블을 설정하거나 확인한다.",
                "netstat - 네트워크 연결 상태, 라우팅 테이블, 네트워크 인터페이스 통계 등을 확인한다."],
            answer: 1
        },
        {
            question: "ifconfig 명령의 기능은?",
            options: ["현재 시스템의 TCP/IP 서비스를 이용할 수 있는(또는 이용할 수 없는) 호스트를 설정한다.",
                "ICMP를 이용하여 원격 호스트와의 연결 여부를 점검한다.",
                "네트워크 인터페이스 정보를 확인하거나 설정한다.",
                "리스팅 중이거나 연결된 소켓에 대한 정보를 확인한다."],
            answer: 2
        },
        {
            question: "시스템을 부팅할 때 자동으로 SSH 데몬을 시작하도록 설정하는 명령으로 올바른 것은?",
            options: ["chkconfig --list sshd",
                "chkconfig sshd on",
                "service sshd start",
                "service sshd enable"],
            answer: 1
        },
        {
            question: "원격 관리 또는 원격 접속을 위한 다음 명령 중 SSH 프로토콜을 사용하지 않아 보안에 취약한 것은?",
            options: ["rcp",
                "ssh",
                "sftp",
                "scp"],
            answer: 0
        },
        {
            question: "아파치 웹 서버의 설정 파일에서 클라이언트가 \".../디렉터리/\"와 같이 디렉터리를 요청하는 경우에 기본으로 사용할 웹 페이지의 파일 이름을 설정하는 항목은?",
            options: ["ServerRoot",
                "LoadModule",
                "DocumentRoot",
                "DirectoryIndex"],
            answer: 3
        },
        {
            question: "설정을 변경한 후에 아파치 웹 서버를 다시 시작하는 명령으로 적당한 것은?",
            options: ["service httpd status",
                "service httpd restart",
                "chkconfig httpd on",
                "systemctl restart mysqld.service"],
            answer: 1
        }
    ],
    컴퓨터과학개론: [ //==================================================
        // {
        //     question: "다음과 같은 이진 탐색 트리에서 노드 22의 후속자(successor) 노드는 무엇인가?", 
        //     content: `<img src='${publicUrl}/images/question/1.png' alt='Second slide' style='${questionImg}' />`, 
        //     options: [
        //         "\\(\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}\\)",
        //         "O(n^2)",
        //         "\\(\\left( \\frac{3x + 2}{x - 1} \\right)^2\\)",
        //         `<img src='${publicUrl}/images/image_1.png' alt='example' style='width: 50px; height: auto;' />`],
        //     answer: 0 
        // },
        { // 2017 기출
            question: "컴퓨터에서 처리 가능한 작업 유형과 연산의 집합을 결정하며, 컴퓨터를 다양한 형태의 작업을 수행할 수 있는 범용의 기계로 만들어 주는 역할을 수행하는 것은?",
            options: ["프로그램",
                "데이터",
                "네트워크",
                "사용자"],
            answer: 0
        },
        {
            question: "현실 세계로부터 관찰이나 측정을 통해 단순히 얻어진 값이나 사실을 무엇이라고 하는가?",
            options: ["정보(information)",
                "워드(word)",
                "지식(knowledge)",
                "자료(data)"],
            answer: 0
        },
        {
            question: "2의 보수 방법으로 표현된 8비트 정수 10010010은 십진수로 얼마인가?",
            options: ["-105",
                "-110",
                "-115",
                "-120"],
            answer: 0
        },
        {
            question: "1001010.111을 부동소수점으로 표현할 때 지수 부분의 8비트 표현으로 올바른 것은? (단, 초과_127을 사용한다.)",
            options: ["10000100",
                "10000101",
                "11000100",
                "11000101"],
            answer: 0
        },
        {
            question: "문자 코드 체계 중에서 가장 많은 문자를 표현할 수 있는 것은?",
            options: ["EBSDIC",
                "ASCII",
                "유니코드",
                "확장된 ASCII"],
            answer: 0
        },
        {
            question: "욕심쟁이 방법을 적용하기에 가장 접합한 것은?",
            options: ["거스름돈 문제",
                "합병 정렬",
                "이진 탐색",
                "퀵 정렬"],
            answer: 0
        },
        {
            question: "다음과 같은 조건의 배낭 문제를 욕심쟁이 방법으로 해결하려고 한다. 이때 배낭에 가장 먼저 집어넣은 물체는? (단, 물체를 쪼갤 수 있다.)",
            content: '- 배낭의 용량 : 10\n- 물체 1 -> 이익 15, 무게 3\n- 물체 2 -> 이익 20, 무게 5\n- 물체 3 -> 이익 9, 무게 3\n- 물체 4 -> 이익 14, 무게 4',
            options: ["물체 1",
                "물체 2",
                "물체 3",
                "물체 4"],
            answer: 0
        },
        {
            question: "빅오 표기 중에서 가장 효율적인 성능을 나타내는 것은?",
            options: ["\\(O(n \\log n)\\)",
                "\\(O(\\log n)\\)",
                "\\(O(n)\\)",
                "\\(O(n^2)\\)"],
            answer: 0
        },
        {
            question: "퀵 정렬에 대한 설명으로 잘못된 것은?",
            options: ["피벗을 사용한다.",
                "최악의 수행 시간은 O(n)이다.",
                "입력 리스트를 두 개의 서브리스트로 나눈다.",
                "분할정복 방법을 적용한 방법이다."],
            answer: 0
        },
        {
            question: "",
            options: ["",
                "",
                "",
                ""],
            answer: 0
        }
    ],
    C: [
        {
            question: "C는 무엇일까?",
            options: ["가", "나", "다", "라"],
            answer: 0
        },
        {
            question: "CC는 무엇일까?",
            options: ["가", "나", "다", "라"],
            answer: 0
        },
    ]
};

const shuffleArray = (array) => {
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

function About() {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
    const [checkedAnswer, setCheckedAnswer] = useState(false);

    const handleSubjectSelect = (subject) => {
        const questionIndex = Math.floor(Math.random() * questions[subject].length);
        setSelectedSubject(subject);
        setCurrentQuestionIndex(questionIndex);
        const shuffledOptions = shuffleArray(questions[subject][questionIndex].options);
        setShuffledOptions(shuffledOptions);
        setCorrectOptionIndex(shuffledOptions.indexOf(questions[subject][questionIndex].options[questions[subject][questionIndex].answer]));
        setSelectedOption(null);
        setCheckedAnswer(false);
    };

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
        setCheckedAnswer(false);
    };

    const handleCheckAnswer = () => {
        setCheckedAnswer(true)
    };

    const handleNextQuestion = () => {
        const currentIdx = currentQuestionIndex;
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * questions[selectedSubject].length);
        } while (nextIndex === currentIdx);

        setCurrentQuestionIndex(nextIndex);
        const shuffledOptions = shuffleArray(questions[selectedSubject][nextIndex].options);
        setShuffledOptions(shuffledOptions);
        setCorrectOptionIndex(shuffledOptions.indexOf(questions[selectedSubject][nextIndex].options[questions[selectedSubject][nextIndex].answer]));
        setSelectedOption(null);
        setCheckedAnswer(false);
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '14px',
        marginBottom: '10px',
        color: 'black',
        textAlign: 'left',
        width: 'auto'
    };

    const badgeStyle = {
        padding: '10px',
        fontSize: '14px',
        cursor: 'pointer',
        marginRight: '10px',
        marginBottom: '10px'
    };

    const questionStyle = {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        marginBottom: '20px'
    };

    const contentStyle = {
        border: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
    };

    const contentPreStyle = {
        margin: '10px',
        textAlign: 'left'
    };

    const formGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem'
    };

    const optionButtonStyle = (index) => {
        let backgroundColor = selectedOption === index ? '#d4d4d4' : '';
        if (checkedAnswer && index === selectedOption) {
            backgroundColor = selectedOption === correctOptionIndex ? 'green' : 'red';
        }
        return {
            width: '100%',
            backgroundColor: backgroundColor,
            color: 'black',
            textAlign: 'left'
        };
    };

    const checkAnswerButtonStyle = {
        marginRight: '1rem'
    };

    const containerStyle = {
        marginTop: '20px'
    };

    const placeholderStyle = {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '20px'
    };

    const dividerStyle = {
        margin: '20px 0',
        borderTop: '1px solid #ddd'
    };

    return (
        <Container style={containerStyle}>
            {selectedSubject === null && (
                <div style={placeholderStyle}>
                    <h3>과목을 선택하세요</h3>
                    <p>아래 버튼을 클릭하여 과목을 선택해 주세요.</p>
                </div>
            )}
            {selectedSubject !== null && (
                <>
                    <div style={questionStyle}>
                        <p>{questions[selectedSubject][currentQuestionIndex].question}</p>
                    </div>
                    {questions[selectedSubject][currentQuestionIndex].content && (
                        <div style={contentStyle}>
                            <pre style={contentPreStyle} dangerouslySetInnerHTML={{ __html: questions[selectedSubject][currentQuestionIndex].content }}></pre>
                        </div>
                    )}


                    <div>
                        <MathJaxContext>
                            {shuffledOptions.map((option, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleOptionSelect(index)}
                                    style={optionButtonStyle(index)}
                                    variant={selectedOption === index ? 'secondary' : 'light'} dangerouslySetInnerHTML={{ __html: `${index + 1}. ${option}` }}
                                >
                                </Button>
                            ))}
                        </MathJaxContext>

                        <div style={formGroupStyle}>
                            <Button variant="info" onClick={handleCheckAnswer} style={checkAnswerButtonStyle}>정답확인</Button>
                            <Button variant="secondary" onClick={handleNextQuestion}>다음문제</Button>
                        </div>
                    </div>
                </>
            )}
            <div style={dividerStyle}></div> {/* 선 추가 */}
            <Row className="mt-4">
                <Col xs="auto">
                    <Badge
                        bg={selectedSubject === 'UNIX시스템' ? "dark" : "secondary"}
                        onClick={() => handleSubjectSelect('UNIX시스템')}
                        style={badgeStyle}
                    >
                        UNIX시스템
                    </Badge>
                </Col>
                <Col xs="auto">
                    <Badge
                        bg={selectedSubject === '컴퓨터과학개론' ? "dark" : "secondary"}
                        onClick={() => handleSubjectSelect('컴퓨터과학개론')}
                        style={badgeStyle}
                    >
                        컴퓨터과학개론
                    </Badge>
                </Col>
                <Col xs="auto">
                    <Badge
                        bg={selectedSubject === 'C' ? "dark" : "secondary"}
                        onClick={() => handleSubjectSelect('C')}
                        style={badgeStyle}
                    >
                        C과목
                    </Badge>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
