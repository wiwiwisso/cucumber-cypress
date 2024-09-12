pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        
        stage('Run Cypress Tests') {
            steps {
                
                sh "npm run cy:run"
             }
        }
    }  
 
}
