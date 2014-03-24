var Model = {
  storage: window.localStorage,

  userKey: function () {
    return Model.storage.getItem("userKey");
  },
    
  setUserKey: function (userKey) {
    Model.storage.setItem("userKey", userKey);
  }
};