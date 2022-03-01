# Pulumi code

**list of Pulumi stakcks**
`pulumi stack ls`

**create a pulumi stack**
`pulumi stack init ${stack_name}`

**select the pulumi stack from list**
`pulumi stack select ${stack_name}`


**looking the pulumi stack output**

`pulumi stack output --json`

**Pulumi aws region set**
```pulumi config set region "us-east-1"```

**Create the secret username or password which is encrypted**
```pulumi config set db_passsword "${password}" --secret```

**Storing the stack in file for backup**
```pulumi stack export --file ${file_name.json}```
