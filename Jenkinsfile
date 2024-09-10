pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/hocinilotfi/cucumber-cypress.git', credentialsId: ''
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Construisez l'image Docker pour Cypress avec Node.js
                    docker.build('my-cypress-image')
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image('my-cypress-image').inside {
                        // Exécutez les tests Cypress
                        sh 'npx cypress run'
                        // Générer le rapport
                        sh 'npm run cy:report-firefox'
                    }
                }
            }
        }
    }

    post {
        always {
            // Archive le rapport JSON généré
            archiveArtifacts artifacts: 'cypress/cucumber-json/*.cucumber.json', allowEmptyArchive: true

            // Publier les résultats de Cucumber
            cucumber(
                reportFiles: 'cypress/cucumber-json/login.cucumber.json',
                fileIncludePattern: '**/*.cucumber.json',
                failedTestsFile: 'cucumber-report.json'
            )
        }
    }
}
