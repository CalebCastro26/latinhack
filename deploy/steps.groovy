def configs(def app, def env) {
    echo env
    echo app

    configFile = readYaml file: 'deploy/vars.yml'
    
    vars = configFile[env]

    appdir = getApplication(app)
    
    config = [
        "ENV=${env}",
        "DEPLOY_REGION=${vars.DEPLOY_REGION}",
        "APP_DIR=${appdir}",
        "APPLICATION=${app}"
    ]

    return config
}

def getApplication(def app) {
    def APPLICATION = [
        "landing": "app",
        "admin":"admin"
    ]
    return APPLICATION[app]
}

def install_dependencies(def config){
    withEnv(config){
        sh 'make npm.install'
    }
}

def build_statics(def config) {
    withEnv(config) {
        sh 'make webpack.build'
    }
}

def deploy_statics(def config) {
    withEnv(config) {
        sh 'make staticfiles.deploy'
    }  
}

return this