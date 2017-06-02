## pingen.io

### Project Scope:
pingen is a two-factor authentication service.

### Accounts
```
{
  id: 1,
  name: 'Prestige Worldwide',
  account_token: '5FE1!JNA3401',
  owner: 450 #userId,e
  members: [123, 4], #userIds,
  email: 16, #emailId
  phone: 1, #phoneId
}
```
#### Create:
A user should be able to create an account, and will become the account owner.

A user should be granted an account_token that will be required on all subsequent requests.

#### Update:
User's should be able to update all account preferences based on permissions.

A user should be able to reset their account_token.

#### Delete:
An owner should be able to delete an account.

All phones, emails, and users will be disassociated with the account.

#### Features:
Owners are the only ones with full Account CRUD access by default and may give permissions to all or no members.

Members have Read access only unless otherwise selected.

An owner may invite a registered user to join their account.

An owner may remove any and all users from their account.

An owner may provision a phone number for outbound PINs.

An owner may provision an email address for outbound PINs.

### Users
```
{
  id: 450,
  name: 'Johnny Hopkins',
  accounts: [1, 3], #accountIds
  email: 3, #emailId
  password: iLuvBacon,
}
```
#### Create:
A person should be able to create a user with a name, email, and password.

#### Update:
A user should be able to edit all fields of their object.
