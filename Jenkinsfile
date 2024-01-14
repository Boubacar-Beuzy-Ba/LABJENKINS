pipeline {
    agent any

    tools {
        nodejs 'NODEJS' // Use the name you configured in Global Tool Configuration
    }
    environment {
        CHROME_BIN = '/usr/bin/chromium'
        NEXUS_VERSION = "nexus3"
        NEXUS_PROTOCOL = "http"
        NEXUS_URL = "127.0.0.1:8081"
        NEXUS_REPOSITORY = "angularLabJenkins"
        ANGULAR_PROJECT_PATH = "/var/jenkins_home/workspace/JenkinsAngularLab"
        NEXUS_CREDENTIAL_ID = "nexus_user"
        ARTIFACT_VERSION = "0.1"
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
        stage('Zipping the angular build dist') {
          steps {
            script{
                zip archive: true,
                dir: ANGULAR_PROJECT_PATH ,
                glob: '',
                zipFile: "angular-"+ARTIFACT_VERSION+".zip"
              }
          }
        }
        stage('Export artefact to Nexus') {
          steps {
                nexusArtifactUploader(
                  nexusVersion: NEXUS_VERSION,
                  protocol: NEXUS_PROTOCOL,
                  nexusUrl: NEXUS_URL,
                  groupId: 'QA',
                  version: ARTIFACT_VERSION,
                  repository: NEXUS_REPOSITORY,
                  credentialsId: NEXUS_CREDENTIAL_ID,
                  artifacts: [
                      [artifactId: 'jenkinsAngularLab',
                      classifier: '',
                      file: 'angular-' + ARTIFACT_VERSION + '.zip',
                      type: 'zip']
                  ]
              )
          }
        }
    }
}
