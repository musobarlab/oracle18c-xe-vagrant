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