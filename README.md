# TypeScript Type Error: Runtime Error Not Caught at Compile Time

This example showcases a scenario where TypeScript's type system, while robust, doesn't prevent all runtime errors. The `add` function is correctly typed to only accept numbers, however the type checker doesn't prevent passing a string literal to the function. This leads to a runtime error (NaN) which is not detected during compilation.

This bug highlights the importance of additional runtime checks, especially when dealing with external data or user input where type safety cannot be guaranteed.