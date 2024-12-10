pipeline{
    agent any

    stages{
        stage("build"){
            steps {
                sh "docker build -t karthi031000cit/portfolio:mk_portfolio ."
            }
        }
        stage("push"){
            steps {
                sh "docker login -u ${env.docker_user} -p ${env.docker_pass}"
                sh "docker push karthi031000cit/portfolio:mk_portfolio"
            }
        }
        stage("run"){
            steps {
                sh "docker run -d -p 8081:80 karthi031000cit/portfolio:mk_portfolio"
            }
        }
    }
}
