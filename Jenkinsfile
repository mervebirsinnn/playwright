pipeline {
    agent any

    stages {
        stage('Hazırlık') {
            steps {
                // Bağımlılıkları yükle
                bat 'npm install'
            }
        }
        
        stage('Tarayıcı Kurulumu') {
            steps {
                // Playwright tarayıcılarını ve sistem bağımlılıklarını kur
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Testleri Koş') {
            steps {
                // package.json içindeki regression scriptini çalıştır
                // 'bat' Linux/Mac içindir, eğer Jenkins'in Windows'taysa 'bat' kullanmalısın
                bat 'npm run regression'
            }
        }
    }
    
    post {
        always {
            // Testler geçse de kalsa da raporları sakla
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}