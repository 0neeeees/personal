#!/bin/sh

test 진행 중....


#info
NOW=$(date +"%Y-%m-%d")
DELDAY=$(date --date '3 month ago' + "%Y%m%d")
DEFAULT='/data'
BACKUP_PATH="${DEFAULT}/backup"
MISO="${DEFAULT}/miso"
TOMCAT="${DEFAULT}/tomcat"
JDK="${DEFUALT}/java"
FILE="${MISO}/fileUpload"
EDITOR="${MISO}/editorImage"
WEBAPPS="${MISO}/webapps"

#database info
DATABASE='miso'
USERNAME='jsp'
PASSWORD='Wlfks@09!@#'


#remote backup server
REMOTE_ID='jsp'
REMOTE_PW="wlfks@09!"
REMOTE_IP="10.52.9.140"
REMOTE_PORT=22
REMOTE_PATH="/data/backup"


#backup directory check
echo ${BACKUP_PATH}

if [ -d ${BACKUP_PATH} ]; then
    echo "Backup directory already exists. starting backup..."
else
    mkdir -p ${BACKUP_PATH}
fi

#tomcat backup
tar -C ${DEFAULT} --exclude=tomcat/logs/* --exclude=tomcat/work/Catalina/localhost/* -zcvf ${NOW}_tomcat.tar.gz tomcat

#fileUpload backup
tar -C ${MISO} -zcvf ${NOW}_fileUpload.tar.gz fileUpload

#editorImage backup
tar -C ${MISO} -zcvf ${NOW}_editorImage.tar.gz editorImage

#webapps backup
tar -C ${MISO} -zcvf ${NOW}_webapps.tar.gz webapps

#remote server 
