/**
 * Script to fetch Figma data using Personal Access Token
 * Usage: node scripts/fetch-figma.js
 */

const https = require('https');

const FIGMA_FILE_KEY = 'J2LLnfBQi1MCjF2DREqdrD';
const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN;
const NODE_ID = process.env.NODE_ID;

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(NODE_ID)}`,
  method: 'GET',
  headers: {
    'X-Figma-Token': PERSONAL_ACCESS_TOKEN,
  },
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      const json = JSON.parse(data);
      console.log('Figma Data:', JSON.stringify(json, null, 2));
      
      // Extract node information
      if (json.nodes && json.nodes[NODE_ID]) {
        const node = json.nodes[NODE_ID].document;
        console.log('\n=== Node Information ===');
        console.log('Name:', node.name);
        console.log('Type:', node.type);
        if (node.absoluteBoundingBox) {
          console.log('Width:', node.absoluteBoundingBox.width);
          console.log('Height:', node.absoluteBoundingBox.height);
        }
      }
    } else {
      console.error('Error:', res.statusCode);
      console.error('Response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('Request error:', error);
});

req.end();

