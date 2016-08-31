### Thoughts

- Why DB?
Because, well, rover could go offline. You need persistent storage.

- Why inmemory?
The code is written in a way so that it's easy to replace the DB in `db.js`
and then updated only the services that are affected.

It would probably have been better to use mongoose or ORM with a memory driver though!

- Autoload?
Just came with the boiler plate

- DB Actions are supposed to be async.
I didn't realise until later lowdb isn't async! Then again, using `await` would allow us
to continue using the same syntax without wrapping everything in then();
