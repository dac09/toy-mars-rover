### Thoughts

- Why DB?
Because, well, rover could go offline. You need persistent storage.

- Why inmemory?
The code is written in a way so that it's easy to replace the DB,
and replace .get('') with e.g. findOne

It would probably have been better to use mongoose or ORM with a memory driver though!

- Autoload?
Just came with the boiler plate
