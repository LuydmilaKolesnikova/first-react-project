let initialState = {
  friends: [
    {
      id: "1",
      name: "Alina",
      avatar:
        "https://sun9-88.userapi.com/c631325/u32907738/video/y_9f09c057.jpg",
    },
    {
      id: "2",
      name: "Slava",
      avatar:
        "https://i.pinimg.com/736x/81/f8/b0/81f8b0e89fec5014636a0f83e251ee92.jpg",
    },
    {
      id: "3",
      name: "Vlad",
      avatar:
        "https://wallbox.ru/resize/640x960/wallpapers/main/201143/koshki-472912b53a18.jpg",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;
