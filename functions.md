---
id: functions
title: "Functions"
---

# Functions

Functions are blocks of code that are executed when called (referred to). You can call a function in code using its name and providing the required arguments (if any). There are some default native functions which can be used along with the other language features to in turn create more function which are referred to as custom functions. One of the reasons you would want to write a custom function is to reduce the repetition of the same lines of code, after the essence of programming lies in making the things more efficient. A function may or may not have arguments. A list of native functions is provided in the Open.MP function's sections along with their 'function' and required arguments. Following is an example of a function which can be used for setting the player's position to some x, y, z coordinates :

```c
public OnPlayerSpawn (playerid)
{
    SetPlayerPos (playerid, -1148.5697, 2694.5464, 45.8672);
    return 1;
}
```

