pipeline {
    agent any

    environment {
        AWS_S3_BUCKET = 'techscrum-s3-test'
        ENV_VAR = ''
    }

    stages {
        stage('clone repo') {
            steps{
                script {
                    // Clone repository or update existing repo
                    if (!fileExists('.git')) {
                        sh 'git init'
                        sh 'git remote add origin https://github.com/Char0r0/techscrum-fe.git'
                    }

                    // pull the lastest repo
                    sh 'git fetch --all'
                    sh 'git reset --hard origin/main'
                    sh 'git clean -fdx'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // delete package-lock.json
                    sh 'rm -f package-lock.json'

                    // install Node.js
                    sh 'curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'

                    // using sudo install Yarn
                    sh 'sudo npm install --global yarn'

                    // install dependance
                    sh 'yarn install'
                    sh 'yarn add cypress --dev'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building.....'
                // copy .env
                sh 'cp .env.local.example .env'
                // Run Building Command
                sh 'npm run build'
            }
        }

        stage('StartApplication') {
            steps {
                // start front end
                sh 'yarn start &'
                // Wait for the application to fully start
                sleep 60
            }
        }

        // stage('Test') {
        //     steps {
        //         script{
        //             echo 'Testing.....'
        //             // Run Testing Command
        //             sh 'npx cypress run'
        //         }
        //     }
        // }


        stage('Deploy') {
            steps {
                script{
                    // Upload the build file to S3
                    sh 'aws s3 sync build/ s3://${{ secrets.AWS_S3_BUCKET }} --delete'
                }
            }
        }

    }
    post {
        always {
            // stop application (kill command)
            sh 'pkill -f "npm start"'
        
        // success {
        //     echo 'tests passed'
        // }
        // failure {
        //     echo 'Tests failed'
        //     archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
        //     archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
        // }
        echo 'Pipeline completed!'
        }
    }
}