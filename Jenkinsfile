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
                sh 'echo "<IfModule mod_rewrite.c>\nRewriteEngine On\nRewriteBase /\nRewriteRule ^index.html$ - [L]\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME} !-l\nRewriteRule . /index.html [L]\n</IfModule>" > build/.htaccess'
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