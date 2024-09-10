pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Cloner le dépôt GitHub
                git branch: 'main', credentialsId: '', url: 'https://github.com/hocinilotfi/cucumber-cypress.git' 
            }
        }

        stage('Test') {
            steps {
                script {
                    // Utiliser l'image officielle Cypress avec toutes les dépendances
                    docker.image('cypress/included:13.14.2').inside {
                        // Installer les dépendances
                        sh 'npm install'
                        // Exécuter la commande pour générer le rapport
                        sh 'npm run cy:report-firefox'
                    }
                }
            }
        }
    }

    post {
        always {
            // Archiver les rapports JSON générés
            archiveArtifacts artifacts: 'cypress/cucumber-json/*.cucumber.json', allowEmptyArchive: true

            // Publier les résultats des tests avec le plugin Cucumber
            // cucumber(
            //     reportFiles: 'cypress/cucumber-json/*.cucumber.json',
            //     fileIncludePattern: '**/*.cucumber.json',
            //     failedTestsFile: 'cucumber-report.json'
            // )
        }
    }
}
