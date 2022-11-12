

const getMinute =(btnName)=>{
  const minute = localStorage.getItem(btnName);
  return parseInt(minute);
}

const setMinute =(btnName, minute)=>{
    return localStorage.setItem(btnName, minute);
}

module.exports ={
    getMinute,
    setMinute
}