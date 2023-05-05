import profileReducer, { addPost } from "./profile-reducer";

it("after adding new post newState must have length 3", () => {
  let initialState = {
    posts: [
      { id: 1, message: "Hi!", likesCount: 11 },
      { id: 2, message: "How are you?", likesCount: 23 },
    ],
  };

  let newState = profileReducer(initialState, addPost("new post"));

  expect(newState.posts.length).toBe(3);
});
