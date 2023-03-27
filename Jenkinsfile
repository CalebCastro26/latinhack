def fnSteps = evaluate readTrusted("deploy/steps.groovy")

pipeline {
  agent any
  parameters {
    choice(
      name: 'APPLICATION',
      choices: ['landing', 'admin']
    )
    choice(
      name: 'ENVIRONMENT',
      choices: ['dev', 'prod']
    )
    choice (
      name: 'EXECUTE',
      choices: [
        'DEPLOY'
      ]
    )
  }
  stages {
    stage('Set Config') {
      steps {
        script {
          config = fnSteps.configs(params.APPLICATION, params.ENVIRONMENT)
        }
      }
    }
    stage('Install dependencies') {
      steps {
        script {
          fnSteps.install_dependencies(config)
        }
      } 
    }
    stage('Build Statics') {
      steps {
        script {
          fnSteps.build_statics(config)
        }
      }      
    }
    stage('Deploy Statics') {
      steps {
        script {
          fnSteps.deploy_statics(config)
        }
      }    
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}