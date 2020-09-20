 export const getDetails = () => {
     return fetch(`https://api.blockcypher.com/v1/eth/main`, { method: "GET" })
       .then(response => {
         return response.json();
      })
       .catch(err => console.log(err));
  };
  export const getBalance = (addr) => {
    return fetch(`https://api.blockcypher.com/v1/eth/main/addrs/${addr}`, { method: "GET" })
      .then(response => {
        return response.json();
     })
      .catch(err => console.log(err));
 };
