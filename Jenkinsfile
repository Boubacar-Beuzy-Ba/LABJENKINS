pipeline {
    agent any

    tools {
        nodejs 'NODEJS' // Use the name you configured in Global Tool Configuration
    }
    environment {
        CHROME_BIN = '/usr/bin/chromium'
    }


    stages {
        stage('Installing & Testing') {
            steps {
                script {
                    echo 'Installing & testing the Angular project'
                    sh 'npm install'
                    sh 'npm install -g @angular/cli'
                    sh 'npm i --save-dev puppeteer'
                    sh 'npm run test --code-coverage --no-watch --no-progress --browsers=ChromeHeadless'

                }
            }
        }
        stage('Build') {
          steps {
            script {
              echo 'Building the Angular project'
              sh 'npm run build'
            }
          }
        }
        stage('Export artefact to Nexus') {
          steps {
                nexusArtifactUploader(
                  nexusVersion: 'nexus3',
                  protocol: 'http',
                  nexusUrl: 'http://locahost:8081',
                  groupId: 'QA',
                  version: '0.1',
                  repository: 'angularLabJenkins',
                  credentialsId: 'nexus_user',
                  artifacts: [
                      [artifactId: 'angularLabJenkins',
                      classifier: '',
                      file: 'my-service-' + version + '.jar',
                      type: 'jar']
                  ]
              )
          }
        }
    }
}
