pipeline{
    agent any
    stages{
        stage("Install NPM packages") {
            steps{
                sh 'npm install'
            }
        }
        stage("Build project") {
            steps {
                sh 'yarn build'
            }
        }
    }
}