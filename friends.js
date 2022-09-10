class Friends {
  constructor() {
   this.name="",
   this.message=" ",
   this.index = 0;

  }
  getCount(){

    database.ref("friendCount").on("value",(data)=>{
      playerCount = data.val();
      console.log(playerCount);
    })

  }

  updateCount(count){

    database.ref("/").update({
      friendCount : count
    })

  }



  addFriends() {
    var friendIndex = "friends/friend" +this.index;
    /*Write a database query to create
    name & message using .set() method */
    //Write your code below this line
   database.ref(friendIndex).set({
     name: this.name,
     positionX: this.positionX,
     positionY: this.positionY,
     message: this.message,
     distance: this.distance,
   }) 
  }

}
