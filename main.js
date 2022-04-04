function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

const inputs = document.querySelectorAll("[name='qty']");
inputs.forEach(function (input) {
 input.addEventListener("change", function (e) {
     const this_input = e.target; 
     const input_value = parseFloat (this_input.value);
     const this_row = this_input.closest(".row");
  const amazon = this_row.querySelectory(".amazon");
  const amazon_price = parseFloat (amazon.dataset.price);
  const amazon_cost =  input_value * amazon_price;
  const amazon_span = amazon.querySelector("span");
  amazon_span.innerHTML = amazon_cost;    
     
      const freshdirect = this_row.querySelectory(".freshdirect");
      const freshdirect_price = parseFloat (freshdirect.dataset.price);
      const freshdirect_cost =  input_value * freshdirect_price;
      const freshdirect_span = freshdirect.querySelector("span");
      freshdirect_span.innerHTML = amazon_cost;
     
      const peapod = this_row.querySelector(".peapod");
      const peapod_price = parseFloat (peapod.dataset.price);
      const peapod_cost =  input_value * peapod_price;
      const peapod_span = peapod.querySelector("span");
      peapod_span.innerHTML = amazon_cost;
     
     amazon.classList.add("active");
     freshdirect.classList.add("active");
     peapod.classList.add("active); 
 });
})
