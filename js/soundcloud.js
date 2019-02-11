SC.initialize({
  client_id: localStorage.ClientID,
  redirect_uri: 'callback/index.html'
});
function SCStart() {
// initiate auth popup
SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});
}
