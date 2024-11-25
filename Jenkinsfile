pipeline {
    agent any

    stages {
        stage(name: 'build') {
          agent{
              docker {
                image 'node:18-alpine'
                reuseNode: true
              }
          }
          step {
            sh '''
                ls -la
                node --version
                npm --version
                npm ci
                npm run build
                ls -la
            '''
        }
        }

        stage(name: 'test') {
            steps {
                echo 'Test stage'
            }
        }

        
        
    }
}
