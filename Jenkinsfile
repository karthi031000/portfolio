pipeline{
    agent any

    stages{
        stage("build"){
            steps {
                sh "docker build . -t karthi031000cit/portfolio:mk_portfolio"
            }
        }
        stage("push"){
            steps {
                sh "docker push karthi031000cit/portfolio:mk_portfolio"
            }
        }
        stage("run"){
            steps {
                sh "docker run karthi031000cit/portfolio:mk_portfolio"
            }
        }
    }
}
