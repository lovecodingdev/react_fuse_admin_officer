import { dateTimeFormatter } from "@material-ui/data-grid";

export const swap = (json) => {
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
}

export const ceil = (number) => {
  return Math.ceil(number * 100) / 100;
}

export const dividing = (n1, n2) => {
  return n1===0 || n2===0 ? 0 : n1/n2;
}

export const formattedDate = (date) => {
  var dd = date.getDate();
  var mm = date.getMonth()+1;//January is 0!`
  var yyyy = date.getFullYear();
  if(dd<10){dd='0'+dd}
  if(mm<10){mm='0'+mm}
  return mm+'/'+dd+'/'+yyyy;
}
  