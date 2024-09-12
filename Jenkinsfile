pipeline {
    agent {
    // this image provides everything needed to run Cypress
        docker {
            image 'cypress/browsers'
        }
     }
    
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
