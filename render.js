// renderer.js
document.getElementById('sendMessageButton').addEventListener('click', () => {
    window.api.sendMessage('Hello from renderer');
  });
  
  window.api.onMessage((message) => {
    console.log('Received message:', message);
  });