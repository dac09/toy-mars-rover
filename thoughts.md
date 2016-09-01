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

- Why are there no models where everything else seems to follow MVC?
Theres only one Model here, so creating models seems an unnecessary abstraction, the service
does this for us.

- Maybe the position updates endpoint should be Move/Rotate.
Makes the operations explicit as to what the action is

- Did I misinterpret the problem?
I've assumed the API Server sits on the rover itself, but thinking about how this will be evaluated
maybe the spec required a control centre API, rather than sit on a rover. May need some clarification :)

- Collision detection
Req --> Push action to queue --> Check if action is possible --> Pop from queue --> Do action

We can also set an interval (but then, it becomes stateful)
