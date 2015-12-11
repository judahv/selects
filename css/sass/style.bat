cd /d %~dp0
::sass --watch --style expanded style.scss:../style.css
::sass --watch --style nested style.scss:../style.css
::sass --watch --style compact style.scss:../style.css
sass --watch --style compressed style.scss:../style.css