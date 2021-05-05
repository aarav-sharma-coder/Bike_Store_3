AFRAME.registerComponent("marker-handler",{
    init:async function(){
        var bikes = await this.getBike()
        this.el.addEventListener("markerFound",()=>{
            var markerId = this.el.id;
            this.handleMarkerFound(dishes ,markerId);
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker Lost");
            this.handleMarkerLost();
        });
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var on = document.getElementById("onb");
        var os = document.getElementById("osb");

        on.addEventListener("click",()=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Bike ordered",
                text: "Your bike will be delivered in 2 weeks."
            })
        });

        os.addEventListener("click",()=>{
        swal({
            icon: "warning",
            title: "Order Summary",
            text: "Work in progress"
        })
    })
    var bike = bikes.filter(bike=> bike.id===markerId)[0]
    var model = document.querySelector(`#model-${dish.id}`);
    model.setAttribute("position", bike.model_geometry.position);
    model.setAttribute("rotation", bike.model_geometry.rotation);
    model.setAttribute("scale", bike.model_geometry.scale);
    },
    getBike: async function(){
        return await firebase.
                     firestore()
                     .collection('bikes')
                     .get()
                     .then(snap=>{
                         return snap.docs.map(doc=>doc.data());
                     })
    }
})