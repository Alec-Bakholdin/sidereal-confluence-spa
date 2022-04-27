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
        stage("Generate .htaccess") {
            steps {
                sh 'echo "<IfModule mod_rewrite.c>
                          RewriteEngine On
                          RewriteBase /
                          RewriteRule ^index.html$ - [L]
                          RewriteCond %{REQUEST_FILENAME} !-f
                          RewriteCond %{REQUEST_FILENAME} !-d
                          RewriteCond %{REQUEST_FILENAME} !-l
                          RewriteRule . /index.html [L]

                          </IfModule>" > build/.htaccess'
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
                                        makeEmptyDirs: true,
                                        noDefaultExcludes: false,
                                        patternSeparator: '[, ]+',
                                        remoteDirectory: '',
                                        remoteDirectorySDF: false,
                                        removePrefix: 'build',
                                        sourceFiles: 'build/**'
                                    ]],
                                    usePromotionTimestamp: false,
                                    useWorkspaceInPromotion: false,
                                    verbose: false
                                ]]
            }
        }
    }
}