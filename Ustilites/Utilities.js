


function setdata(id, value) {

      let check = localStorage.getItem("store");
      if (check) {
            check = JSON.parse(check)

      }
      else {
            check = {};
      }

      if (id in check) {
            // value = value + check[id];
            // check[id] = value;
         check[id]=check[id]+1;

      } else {
            // check[id] = value;
            check[id]=1;

      }
      localStorage.setItem("store", JSON.stringify(check));

}


function deletedata(id, value) {
      let check = localStorage.getItem("store");
      if (check) {
            check = JSON.parse(check)

      }
      else {
            check = {};
      }

      if (id in check) {
            delete (check[id]);

      } else {


      }
      localStorage.setItem("store", JSON.stringify(check));
}


export { setdata, deletedata };