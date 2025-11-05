function searchJob(event) {
  event.preventDefault(); 
  let input = document.getElementById("companyInput").value.toLowerCase().trim();
  let input1=document.getElementById("locationInput").value.toLowerCase().trim();

  

  
  if (input.includes("google")) {
    window.location.href = "google-jobs.html";
  } else if (input.includes("microsoft")) {
    window.location.href = "microsoft-jobs.html";
  } else if (input.includes("amazon")) {
    window.location.href = "amazon-jobs.html";
  } else if (input.includes("tcs")) {
    window.location.href = "tcs-jobs.html";
  } else if (input.includes("infosys")) {
    window.location.href = "infosys-jobs.html";
  } else {
    alert("No job postings found for this company!");
  }

  if (input && input1) {
    //amazon
  if (input.includes("amazon") && input1.includes("mumbai")) {
    window.location.href = "amazon-mumbai-jobs.html";
  } else if (input.includes("amazon") && input1.includes("hyderabad")) {
    window.location.href = "amazon-hyderabad-jobs.html";
  } else if (input.includes("amazon") && input1.includes("bengaluru")) {
    window.location.href = "amazon-bengaluru-jobs.html";
  } else if (input.includes("amazon") && input1.includes("delhi")) {
    window.location.href = "amazon-delhi-jobs.html";
   }
    else if (input.includes("amazon") && input1.includes("pune")) {
    window.location.href = "amazon-pune-jobs.html";
   } 
    else if (input.includes("amazon") && input1.includes("chennai")) {
    window.location.href = "amazon-chennai-jobs.html";
   } 
   //google
   else if (input.includes("google") && input1.includes("bengaluru")) {
    window.location.href = "google-bengaluru-jobs.html";
  } else if (input.includes("google") && input1.includes("hyderabad")) {
    window.location.href = "google-hyderabad-jobs.html";
  } else if (input.includes("google") && input1.includes("mumbai")) {
    window.location.href = "google-mumbai-jobs.html";
  } else if (input.includes("google") && input1.includes("delhi")) {
    window.location.href = "google-delhi-jobs.html";
}  else if (input.includes("google") && input1.includes("chennai")) {
    window.location.href = "google-chennai-jobs.html";
   }
   //infosys
   else if (input.includes("infosys") && input1.includes("bengaluru")) {
    window.location.href = "infosys-bengaluru-jobs.html";
  } else if (input.includes("infosys") && input1.includes("hyderabad")) {
    window.location.href = "infosys-hyderabad-jobs.html";
  } else if (input.includes("infosys") && input1.includes("pune")) {
    window.location.href = "infosys-pune-jobs.html";
  } else if (input.includes("infosys") && input1.includes("chennai")) {
    window.location.href = "infosys-chennai-jobs.html";
   }  else if (input.includes("infosys") && input1.includes("mysuru")) {
    window.location.href = "infosys-mysuru-jobs.html";
   }else if (input.includes("infosys") && input1.includes("gurgaon")) {
    window.location.href = "infosys-gurgaon-jobs.html";
   }
   //Microsoft
   else if (input.includes("microsoft") && input1.includes("hyderabad")) {
    window.location.href = "microsoft-hyderabad-jobs.html";
  } else if (input.includes("microsoft") && input1.includes("bengaluru")) {
    window.location.href = "microsoft-bengaluru-jobs.html";
  } else if (input.includes("microsoft") && input1.includes("mumbai")) {
    window.location.href = "microsoft-mumbai-jobs.html";
  } else if (input.includes("microsoft") && input1.includes("pune")) {
    window.location.href = "microsoft-pune-jobs.html";
   }  else if (input.includes("microsoft") && input1.includes("noida")) {
    window.location.href = "microsoft-noida-jobs.html";
   }else if (input.includes("microsoft") && input1.includes("chennai")) {
    window.location.href = "microsoft-chennai-jobs.html";
   }
   //TCS
   else if (input.includes("tcs") && input1.includes("bengaluru")) {
    window.location.href = "tcs-bengaluru-jobs.html";
  } else if (input.includes("tcs") && input1.includes("hyderabad")) {
    window.location.href = "tcs-hyderabad-jobs.html";
  } else if (input.includes("tcs") && input1.includes("mumbai")) {
    window.location.href = "tcs-mumbai-jobs.html";
  } else if (input.includes("tcs") && input1.includes("pune")) {
    window.location.href = "tcs-pune-jobs.html";
   }  else if (input.includes("tcs") && input1.includes("chennai")) {
    window.location.href = "tcs-chennai-jobs.html";
   }else if (input.includes("tcs") && input1.includes("noida")) {
    window.location.href = "tcs-noida-jobs.html";
   }
   else {
    alert("❌ No job postings found for this company & location!");
  }
}
return;

}
