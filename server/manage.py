# server/manage.py

import os
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from app import db, create_app

app = create_app(config_name=os.environ.get('APP_SETTINGS'))
migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)


@manager.command
def create_db():
    """Creates the db tables"""
    db.create_all()


@manager.command
def drop_db():
    """Drop all db tables"""
    db.drop_all()


if __name__ == "__main__":
    manager.run()