import time

from fabric.api import run, env, cd, settings, roles, execute, runs_once
from fabric.colors import green, red
from fabric.context_managers import prefix


env.user = 'baiju'
env.activate = 'source ~/.virtualenvs/baiju/bin/activate && source .env'

env.roledefs = {
    'test': ['139.59.15.173']
}


def pull():
    print(red("\nPulling code"))
    run('git pull')
    print(green("Pulled"))


def install_requirements():
    print(red("\nInstalling requirements"))
    run('pip install --upgrade pip')
    run('pip install -r requirements.txt')
    print(green("Installed requirements"))


def apply_migrations():
    print(red("\nApplying migrations..."))
    run("python manage.py migrate")
    print(green("Applied Migrations"))


@runs_once
def collect_static():
    print(red("\nRun collectstatic..."))
    run("python manage.py collectstatic")
    print(green("Collectstatic done"))


def restart_nginx():
    print(red("\nRestarting nginx"))
    run('sudo service nginx restart')
    print(green("Nginx restarted"))


def kill_running_supervisord():
    with settings(warn_only=True):
        print(red("\nKilling supervisord process"))
        run('kill -9 `cat /tmp/supervisord.pid`', pty=False)
        print(green("Killed supervisord process"))

def kill_running_gunicorn_process():
    with settings(warn_only=True):
        print(red("\nKilling gunicorn process"))
        run('kill -9 `cat gunicorn_pid`', pty=False)
        print(green("Killed gunicorn process"))

def start_supervisord():
    print(green("\nStarting gunicorn with supervisor process"))
    result = run('supervisord', pty=False)
    print(green(str(result.return_code)))
    print(green("Started gunicorn process"))


def deploy_to_prod(collect=''):
    code_dir = '~/baijudharmajan/'
    with cd(code_dir):
        with prefix(env.activate):
            print("\nDeploying on %s as %s" % (env.host, env.user))
            pull()
            install_requirements()
            apply_migrations()
            collect_static()
            kill_running_supervisord()
            kill_running_gunicorn_process()
            restart_nginx()
            time.sleep(10)
            start_supervisord()


@roles('test')
def deploy(extra=''):
    execute(deploy_to_prod, collect=extra)
