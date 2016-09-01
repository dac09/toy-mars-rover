## Thoughts

#### Starter kit
I started off from https://github.com/boadude/express-restful-starter


#### Why in-memory DB?
The code is written in a way so that it's easy to replace the DB in `db.js`
and then updated only the services that are affected.

It would probably have been better to use mongoose or ORM with a memory driver, in retrospect, though!

I imagined that having a DB might be nice if the rover goes offline ;)

#### Autoload?
Just came with the boiler plate

#### DB Actions are supposed to be async.
I didn't realise until later lowdb isn't async! Then again, using `await` would allow us
to continue using the same syntax without wrapping everything in then()

#### Why are there no models where everything else seems to follow MVC?
Theres only one Model here, so creating models seems an unnecessary abstraction, the service
does this for us.

#### Maybe the position updates endpoint should be Move/Rotate.
Makes the operations explicit as to what the action is

#### Did I misinterpret the problem?
I've assumed the API Server sits on the rover itself, but thinking about how this will be evaluated
maybe the spec required a control centre API, rather than sit on a rover. May need some clarification in the spec :)

#### Collision detection
Req --> Push action to queue --> Check if action is possible --> Pop from queue --> Do action

We can also set an interval (but then, it becomes stateful)

Not currently implemented

#### MOVE vs Rotate
To be kind of restful, we need to accept PUT requests to position. But sending directions to move isn't strictly
RESTful. So for now, all the code is in one controller - messy, but a compromise. To be properly RESTful, maybe it Should
send the updated coordinates rather than the commands!

Putting direction in a separate object is also misleading, as you don't know from GET position which way you are facing

#### Testing isn't complete
Because I can't currently mock the DB (don't have a method to update current position directly), its difficult to unit
test movements. I'm skipping this currently, because we're not using a real database, so mocking it without additional
frameworks will take a bit more time!

#### Need to organise code in positionController better
Code is too long in that update function!
