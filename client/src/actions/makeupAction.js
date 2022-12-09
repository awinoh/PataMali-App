const makeupAction = {
    fetchMakeups () {
      return fetch('http://localhost:4000/api/v1/makeups')
      .then(response => response.json())
    },
   
    createMakeup(makeup) {
     const request = {
       method: 'POST',
       body: JSON.stringify({
         makeup: makeup
       }),
     headers: {
       'Content-Type' : 'application/json',
     }
    
   };
      return fetch('http://localhost:4000/api/v1/makeups', request)
      .then(response => response.json())
    }
   }
   
   export default makeupAction;