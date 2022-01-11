#!/usr/bin/env groovy
node('master') {

    stage('env'){

        checkout scm

        env.GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
        env.EMAIL_TO = sh (script: 'git log -n 50 --pretty="%ce" | sort | uniq | grep -E "@(gmail.com|frc.org)" | tr \'\n\' \',\' | xargs | sed \'s/\\(.*\\),/\\1 /\'', returnStdout: true).trim()

        emailext    to: "${env.EMAIL_TO}",
                    body: "View build output here: $BUILD_URL/console\n\nLast Commit Message: ${env.GIT_COMMIT_MSG}",
                    subject: "acm.frc.org BUILD STARTING: ${env.BRANCH_NAME} : ${BUILD_ID}",
                    replyTo: 'eab@frc.org'

    }

    stage('build'){

    }

    stage('setup') {

    }

    stage('test') {

    }

    if( env.BRANCH_NAME == 'production' ){

        stage('deploy') {

        }
    }


}
