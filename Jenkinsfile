pipeline {
    agent any

    stages {
        stage('build') {
          agent{
              docker {
                image 'node:lts-alpine3.18'
                reuseNode true
              }
          }
          steps {
            sh '''
                ls -la
                node --version
                npm --version
                npm install
                npm run build
                ls -la
            '''
        }
        }

        stage('test') {
            steps {
                echo 'Test stage'
            }
        }

        
        
    }
}
