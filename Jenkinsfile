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
        stage("Attempt to upload to FTP") {
            steps{
                ftpPublisher alwaysPublishFromMaster: true,
                                 continueOnError: false,
                                 failOnError: false,
                                 masterNodeName: '',
                                 paramPublish: null,
                                 publishers: [[
                                    configName: 'Sidereal Confluence',
                                    transfers: [[
                                        asciiMode: false,
                                        cleanRemote: true,
                                        excludes: '',
                                        flatten: false,
                                        makeEmptyDirs: false,
                                        noDefaultExcludes: false,
                                        patternSeparator: '[, ]+',
                                        remoteDirectory: '',
                                        remoteDirectorySDF: false,
                                        removePrefix: 'build',
                                        sourceFiles: 'build/*'
                                    ]],
                                    usePromotionTimestamp: false,
                                    useWorkspaceInPromotion: false,
                                    verbose: false
                                ]]
            }
        }
    }
}