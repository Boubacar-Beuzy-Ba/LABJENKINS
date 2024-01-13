pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building the Angular project'
        tool(name: 'nodejs', type: 'NODEJS')
        sh '''sh \'npm install\'
sh \'npm run build\''''
      }
    }

  }
}