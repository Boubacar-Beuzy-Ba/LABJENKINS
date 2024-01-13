pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building the Angular project'
        sh '''sh \'npm install\'
sh \'npm run build\''''
      }
    }

  }
}