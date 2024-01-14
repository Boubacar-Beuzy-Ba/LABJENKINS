pipeline {
    agent any

    tools {
        nodejs 'NODEJS' // Use the name you configured in Global Tool Configuration
    }
    environment {
        CHROME_BIN = '/usr/bin/google-chrome'
    }


    stages {
        stage('Installing & Testing') {
            steps {
                script {
                    echo 'Installing & testing the Angular project'
                    sh 'npm install'
                    sh 'npm install -g @angular/cli'
                    sh 'npm i --save-dev puppeteer'
                    sh 'npm run test --code-coverage'

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
    }
}
