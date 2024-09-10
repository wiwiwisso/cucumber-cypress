pipeline {
    agent {
        docker {
            image 'cypress/included:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
               git branch: 'main', credentialsId: '', url:  'https://github.com/hocinilotfi/cucumber-cypress.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                sh 'cypress run'
            }
        }
    }
    
    post {
        always {
            junit 'cypress/results/**/*.xml'
        }
    }
}