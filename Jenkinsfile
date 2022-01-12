#!/usr/bin/env groovy
node('master') {
    try{


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
            // build the image
            sh "docker build -t familyresearchcouncil/acm:${env.BRANCH_NAME} ."
        }

        stage('setup') {
            // start the services
//             sh 'docker-compose up -d'
        }

        stage('test') {
//             check status code of http request

//             int status = sh(script: "curl -sLI -w '%{http_code}' localhost:3000 -o /dev/null", returnStdout: true)
//
//             if (status != 200 && status != 201) {
//                 error("Returned status code = $status when calling $url")
//             }

        }

        stage('deploy') {

            // push the image to dockerhub so it is available to pull
            sh "docker push familyresearchcouncil/acm:${env.BRANCH_NAME}"

            // copy the files necessary to deploy the application
            sh "scp deploy.sh docker-compose.*.yml docker01:/docker/containers/acm"

            // tell the swarm to pull down the latest image
            sh "ssh docker01 /docker/containers/acm/deploy.sh ${env.BRANCH_NAME}"


        }

    } catch(error) {
        emailext    to: "${env.EMAIL_TO}",
                    body: "View build output here: $BUILD_URL/console\n\nError ${error}",
                    subject: "acm.frc.org BUILD FAILED: ${env.BRANCH_NAME} : ${BUILD_ID}",
                    replyTo: 'eab@frc.org'

    } finally  {
        sh 'docker-compose down'
    }

}
