  {/* SERVER ACTIONS  */}
  import fs from "fs/promises"


  export const submitAction = async (e) =>{
    "use server"
    fs.writeFile("kaif.text", "HELLO WORLD")
    console.log(e.get("name"), e.get("add"))
  }