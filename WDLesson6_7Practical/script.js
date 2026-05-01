let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.on_street_name}</h3>
                 <p>${complaint.off_street_name}</p>
                 <hr>
                 <p>${complaint.crash_date}</p>
                 <p>${complaint.crash_time}</p>
                 <hr>
                 <p>${complaint.vehicle_type_code1}</p>
                 <hr>
                 <p>${complaint.collision_id}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByCrashDate(){
  let output = document.getElementById("output");
  let date = document.getElementById("Date").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;
for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.crash_date==date)
    build += `<div class="fitted card">
                 <h3>${complaint.on_street_name}</h3>
                 <p>${complaint.off_street_name}</p>
                 <hr>
                 <p>${complaint.crash_date}</p>
                 <p>${complaint.crash_time}</p>
                 <hr>
                 <p>${complaint.vehicle_type_code1}</p>
                 <hr>
                 <p>${complaint.collision_id}</p>
              </div>`    
    ct += 1;
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
 

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByCollisionID(){
  let output = document.getElementById("output");
  let collision = document.getElementById("Collision").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;
for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if (complaint.collision_id==collision)
    build += `<div class="fitted card">
                 <h3>${complaint.on_street_name}</h3>
                 <p>${complaint.off_street_name}</p>
                 <hr>
                 <p>${complaint.crash_date}</p>
                 <p>${complaint.crash_time}</p>
                 <hr>
                 <p>${complaint.vehicle_type_code1}</p>
                 <hr>
                 <p>${complaint.collision_id}</p>
              </div>`   
   ct += 1;            
}
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
 

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function filterByOnStreetName(){
  let output = document.getElementById("output");
  let name = document.getElementById("Name").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;
for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if (complaint.off_street_name==name)
    build += `<div class="fitted card">
                 <h3>${complaint.on_street_name}</h3>
                 <p>${complaint.off_street_name}</p>
                 <hr>
                 <p>${complaint.crash_date}</p>
                 <p>${complaint.crash_time}</p>
                 <hr>
                 <p>${complaint.vehicle_type_code1}</p>
                 <hr>
                 <p>${complaint.collision_id}</p>
              </div>`    
    ct += 1;
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

