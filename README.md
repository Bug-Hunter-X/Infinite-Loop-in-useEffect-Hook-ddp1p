# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by an incorrect dependency array in the `useEffect` hook.

## Bug Description

The `useEffect` hook in `bug.js` attempts to update the `count` state within the effect function itself.  Since `count` is in the dependency array, the effect runs again after each update, leading to an infinite loop.

## Solution

The solution (`bugSolution.js`) modifies the dependency array to avoid this behavior.  The solution explains how to fix this error and provides the correct implementation to avoid this issue.