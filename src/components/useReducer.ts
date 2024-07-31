// This is for counter, the initial state
type ReducerType = {
  count: number
  status: string
}
// This is for counter also, the action type
type UpdateTypeAction = {
  type: 'increment' | 'decrement' | 'reset'
}

export const initialState: ReducerType = {
  count: 0,
  status: 'Pending',
}

// This is for status, the initial state, and the action type

type SetStatusAction = {
  type: 'setStatus'
  payload: 'active' | 'inactive'
}
type CounterAction = UpdateTypeAction | SetStatusAction

export const counterReducer = (
  state: ReducerType,
  action: CounterAction
): ReducerType => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }
    case 'setStatus':
      return { ...state, status: action.payload }
    default:
      const onHandleActionType: never = action
      throw new Error(
        `Unexpected action type ${onHandleActionType}. Please Double check the counter reducer `
      )
  }
}

// export const counterReducer = (
//   state: ReducerType,
//   action: CounterAction
// ): ReducerType => {
//   if (action.type === 'increment') {
//     return { ...state, count: state.count + 1 }
//   } else if (action.type === 'decrement') {
//     return { ...state, count: state.count - 1 }
//   } else if (action.type === 'reset') {
//     return { ...state, count: 0 }
//   } else if (action.type === 'setStatus') {
//     return { ...state, status: action.payload }
//   } else {
//     throw new Error(
//       `Unexpected action type. Please double check the counter reducer`
//     )
//   }
// }

// Let's break down the useReducer hook in this TypeScript code.

// Understanding the Core Concepts

// Reducers: Reducers are pure functions that take the current state of your application and an action, and return a new state. They are the heart of how state changes in a predictable and manageable way.
// Actions: Actions are objects that describe what happened in your application. They typically have a type property to identify the action and potentially a payload property to carry additional data.
// useReducer Hook: The useReducer hook is a React hook that provides a way to manage state using a reducer. It's a powerful alternative to the useState hook when your state logic becomes more complex.
// Code Breakdown

// Types:

// ReducerType: Defines the shape of your state object, containing count (a number) and status (a string).
// UpdateTypeAction: Represents actions that modify the count (increment, decrement, reset).
// SetStatusAction: Represents actions that change the status (active, inactive).
// CounterAction: A union type combining UpdateTypeAction and SetStatusAction, ensuring that the reducer can handle all possible actions.
// Initial State:

// initialState: Sets the initial values for count (0) and status ('Pending').
// Reducer Function:

// counterReducer: This is the core of your state management. It takes the current state (state) and an action (action) as arguments.
// Switch Statement: The switch statement handles different action types:
// increment: Increases the count by 1.
// decrement: Decreases the count by 1.
// reset: Sets the count back to 0.
// setStatus: Updates the status based on the payload of the action.
// Default Case: The default case throws an error if an unexpected action type is encountered, helping you catch potential bugs early.
// How to Use the useReducer Hook

// Import: Import the counterReducer and initialState from this file into your component.

