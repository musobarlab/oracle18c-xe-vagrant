# oracle18c XE with Vagrant

Run and Test `Oracle 18c XE Database` with VirtualBox and Vagrant

### Build and Run

```shell
$ vagrant up
```

### Connection
The default database connection parameters are:

- Hostname: localhost
- Port: 1521
- SID: XE
- PDB: XEPDB1
- EM Express port: 5500
- Password: open `.env` file

### Reference
https://github.com/oracle/vagrant-projects/tree/main/OracleDatabase/18.4.0-XE

## Create User

Login as oracle user using:

```shell
$ sudo su - oracle
```

Add the following to the end of oracle user's .bashrc:

### User specific aliases and functions
```shell
export ORACLE_BASE=/opt/oracle
export ORACLE_HOME=/opt/oracle/product/18c/dbhomeXE
export ORACLE_SID=XE
export PATH=$PATH:$ORACLE_HOME/bin
export LD_LIBRARY_PATH=$ORACLE_HOME/lib
```

and type 
```shell
source ~/.bashrc
```

### Oracle SQL Developer (optional)
Exit and go to the following site and download sql-developer: https://www.oracle.com/tools/downloads/sqldev-downloads.html

Install the .rpm and run the setup script:

```shell
$ sudo dnf -y install sqldeveloper-20.4.1.407.0006-20.4.1-407.0006.noarch.rpm
$ cd /opt/sqldeveloper/
$ ./sqldeveloper.sh
```

For HiDPI displays, append to /opt/oracle-sqldeveloper/sqldeveloper/bin/sqldeveloper.conf the following: AddVMOption -Dsun.java2d.uiScale=2

### How to add a non-system database user

Login as oracle user using:

```shell
$ sudo su - oracle
```

How to add a non-system database user (so you don't have to see system tables): In a terminal type:
```shell
$ sqlplus sys as sysdba
```

Enter the lines:

```shell
SQL> alter session set "_ORACLE_SCRIPT"=true;
```

Create a local user called whatever you want. Type the password for the user in the following line after "identified by"

```shell
SQL> create user wury identified by 12345;
```

Grant your user admin privileges:

```shell
SQL> grant all privileges to wury;
```

Then exit the command prompt:

```shell
SQL> exit;
```

## Test database with simple Nodejs script

Build docker image
```shell
$ docker build -t ora-test .
```

Run
```shell
$ docker run --rm ora-test
```