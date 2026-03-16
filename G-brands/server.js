const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve index.html from the html folder at root
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'html', 'index.html');
  
  // Check if file exists
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    console.error('❌ index.html NOT found at:', indexPath);
    res.status(404).send('index.html not found in /html folder');
  }
});

// Create server instance
const server = app.listen(port, () => {
  console.log(`✅ Portfolio server running at http://localhost:${port}`);
  console.log(`📂 Open http://localhost:${port} in your browser`);
  console.log(`📁 Looking for index.html at: ${path.join(__dirname, 'html', 'index.html')}`);
  
  // Check if file exists and log result
  const indexPath = path.join(__dirname, 'html', 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log('✅ index.html FOUND!');
  } else {
    console.log('❌ index.html NOT FOUND! Please check the path');
  }
  
  console.log(`🛑 Press Ctrl+C to stop the server`);
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${port} is already in use. Try these solutions:`);
    console.error('   1. Close other applications using port 3000');
    console.error('   2. Kill the process using: npx kill-port 3000');
    console.error('   3. Change the port number in server.js');
  } else {
    console.error('❌ Server error:', error);
  }
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Server stopped');
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Server terminated');
  server.close(() => {
    process.exit(0);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  server.close(() => {
    process.exit(1);
  });
});