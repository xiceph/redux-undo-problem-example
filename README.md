# redux-undo-problem-example

There are some unnecessary parts to show the problem, but it is left from a production app to be connected.

## Installation
```
npm install
```


## Run demo app
```
npm run dev
```
App is running at `http://localhost:8088`

## How it works
Test buttons change name of panel. Buttons appened with sign + increase depth, which means that this can be undone (go upper, until test 0 or default);
Set info button change info property, but this `SET_INFO` action type is filtered out for undo.
Back button perfoms undo action (disabled when undo action will not decrease depth).

## Problem description
Set info button perform action, which has to be filtered out, but is not. Debug console says `filter prevented action, not storing it` but new object is inserted into `past` array. 

## Step to reproduce problem
* Press `Test 0`
* Press `Test 1` (back button become active)
* Press `set info` (back button become disabled)

## Expected result
Pressing `set info` button should not change history therefore back button is enabled and perform undo action to `Test 1`
